import { Request, Response } from 'express';
import Thumbnail from '../models/thumbnail.js';
import { GenerateContentConfig, HarmBlockThreshold, HarmCategory } from '@google/genai';
import ai from '../config/ai.js';
import path from 'path';
import fs from 'fs';
import { v2 as cloudinary } from 'cloudinary';

const stylePrompts = {
  'Bold & Graphic':
    'eye-catching thumbnail, bold typography, vibrant colors, expressive facial reaction, dramatic lighting, high contrast, click-worthy composition, professional style',

  'Tech/Futuristic':
    'futuristic thumbnail, sleek modern design, digital UI elements, glowing accents, holographic effects, cyber-tech aesthetic, sharp lighting, high-tech atmosphere',

  'Minimalist':
    'minimalist thumbnail, clean layout, simple shapes, limited color palette, plenty of negative space, modern flat design, clear focal point',

  'Photorealistic':
    'photorealistic thumbnail, ultra-realistic lighting, natural skin tones, candid moment, DSLR-style photography, lifestyle realism, shallow depth of field',

  'Illustrated':
    'illustrated thumbnail, custom digital illustration, stylized characters, bold outlines, vibrant colors, creative cartoon or vector art style',
};

const colorSchemeDescriptions = {
  vibrant: 'vibrant and energetic colors, high saturation, bold contrasts',
  sunset: 'warm sunset tones, orange pink and purple hues',
  forest: 'natural green tones, earthy colors',
  neon: 'neon glow effects, electric blues and pinks',
  purple: 'purple-dominant color palette',
  monochrome: 'black and white, high contrast',
  ocean: 'cool blue and teal tones',
  pastel: 'soft pastel colors, gentle tones',
};




export const generateThumbnail = async (req: Request, res: Response) => {
  let filePath = "";

  try {
    const { userId } = req.session;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const {
      title,
      prompt: user_prompt,
      style,
      aspect_ratio,
      color_scheme,
      text_overlay,
    } = req.body;

    if (!title || !style) {
      return res.status(400).json({ message: "Title and style are required" });
    }

    if (!stylePrompts[style as keyof typeof stylePrompts]) {
      return res.status(400).json({ message: "Invalid style" });
    }

    const thumbnail = await Thumbnail.create({
      userId,
      title,
      prompt_used: user_prompt,
      user_prompt,
      style,
      aspect_ratio,
      color_scheme,
      text_overlay,
      isGenerating: true,
    });

    const promptParts: string[] = [
      `Create a ${stylePrompts[style as keyof typeof stylePrompts]} thumbnail for "${title}".`,
      `Aspect ratio ${aspect_ratio || "16:9"}.`,
      `Make it bold, professional, and click-worthy.`,
    ];

    if (color_scheme) {
      promptParts.push(
        `Use ${colorSchemeDescriptions[color_scheme as keyof typeof colorSchemeDescriptions]} colors.`
      );
    }

    if (user_prompt) {
      promptParts.push(`Additional details: ${user_prompt}`);
    }

    const response: any = await ai.models.generateContent({
      model: "gemini-3-pro-image-preview",
      contents: [promptParts.join(" ")],
      config: {
        responseModalities: ["IMAGE"],
        imageConfig: {
          aspectRatio: aspect_ratio || "16:9",
          imageSize: "1K",
        },
      },
    });

    const parts = response?.candidates?.[0]?.content?.parts;
    if (!Array.isArray(parts)) {
      throw new Error("Gemini returned no image candidates");
    }

    let finalBuffer: Buffer | null = null;

    for (const part of parts) {
      if (part.inlineData?.data) {
        finalBuffer = Buffer.from(part.inlineData.data, "base64");
        break;
      }
    }

    if (!finalBuffer) {
      throw new Error("AI did not return image data");
    }

    const imagesDir = path.join(process.cwd(), "images");
    fs.mkdirSync(imagesDir, { recursive: true });

    filePath = path.join(imagesDir, `thumbnail-${Date.now()}.png`);
    fs.writeFileSync(filePath, finalBuffer);

    const uploadResult = await cloudinary.uploader.upload(filePath);
    // thumbnail.image_url = uploadResult.secure_url;
    // thumbnail.isGenerating = false;
    // await thumbnail.save();

    // res.json({ message: "Thumbnail generated", thumbnail });

    thumbnail.image_url = uploadResult.secure_url;
    thumbnail.isGenerating = false;
    await thumbnail.save();

    // 🔥 IMPORTANT: fresh read to include timestamps
    const freshThumbnail = await Thumbnail.findById(thumbnail._id);

    res.status(201).json({
      message: "Thumbnail generated",
      thumbnail: freshThumbnail,
    });

  } catch (error: any) {
    console.error("THUMBNAIL ERROR:", error);
    res.status(500).json({ message: error.message });
  } finally {
    if (filePath && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }
};

export const deleteThumbnail = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { userId } = req.session;

    await Thumbnail.findOneAndDelete({ _id: id, userId });
    res.json({ message: 'Thumbnail deleted successfully' });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
















