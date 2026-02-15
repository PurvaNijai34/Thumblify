import thumb_1 from "./thumb_1.jpg";
import thumb_2 from "./thumb_2.jpg";
import thumb_3 from "./thumb_3.jpg";
import thumb_4 from "./thumb_4.jpg";
import thumb_5 from "./thumb_5.jpg";
import thumb_6 from "./thumb_6.jpg";
import thumb_7 from "./thumb_7.jpg";

export const aspectRatios = ["16:9", "1:1", "9:16"];
export type AspectRatio = (typeof aspectRatios)[number];

export const thumbnailStyles = ["Bold & Graphic", "Minimalist", "Photorealistic", "Illustrated", "Tech/Futuristic"];
export type ThumbnailStyle = (typeof thumbnailStyles)[number];

export const colorSchemes = [
    { id: "vibrant", name: "Vibrant", colors: ["#FF6B6B", "#4ECDC4", "#45B7D1"] },
    { id: "sunset", name: "Sunset", colors: ["#FF8C42", "#FF3C38", "#A23B72"] },
    { id: "ocean", name: "Ocean", colors: ["#0077B6", "#00B4D8", "#90E0EF"] },
    { id: "forest", name: "Forest", colors: ["#2D6A4F", "#40916C", "#95D5B2"] },
    { id: "purple", name: "Purple Dream", colors: ["#7B2CBF", "#9D4EDD", "#C77DFF"] },
    { id: "monochrome", name: "Monochrome", colors: ["#212529", "#495057", "#ADB5BD"] },
    { id: "neon", name: "Neon", colors: ["#FF00FF", "#00FFFF", "#FFFF00"] },
    { id: "pastel", name: "Pastel", colors: ["#FFB5A7", "#FCD5CE", "#F8EDEB"] },
] as const;
export type ColorScheme = (typeof colorSchemes)[number];

export interface ThumbnailRequest {
    title: string;
    colorSchemeId: string;
    aspectRatio: AspectRatio;
    style: ThumbnailStyle;
    additionalDetails?: string;
}

export interface IThumbnail {
    _id: string;
    userId: string;
    title: string;
    description?: string;
    style: "Bold & Graphic" | "Tech/Futuristic" | "Minimalist" | "Photorealistic" | "Illustrated";
    aspect_ratio?: "16:9" | "1:1" | "9:16";
    color_scheme?: "vibrant" | "sunset" | "forest" | "neon" | "purple" | "monochrome" | "ocean" | "pastel";
    text_overlay?: boolean;
    image_url?: string;
    prompt_used?: string;
    user_prompt?: string;
    isGenerating?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IUser {
    name: string;
    email: string;
    password?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export const dummyThumbnails = [
    {
        _id: "69451ff3c9ea67e4c930f6a6",
        userId: "6942b3bd2a93a220baa331b3",
        title: "Top smartwatch under 1499",
        style: "Bold & Graphic",
        aspect_ratio: "16:9",
        color_scheme: "vibrant",
        text_overlay: true,
        image_url: thumb_1,
        prompt_used: "add multiple smartwatches ",
        user_prompt: "add multiple smartwatches ",
        isGenerating: false,
        createdAt: "2025-12-19T09:50:43.727Z",
        updatedAt: "2025-12-19T09:51:07.874Z",
        __v: 0,
    },
    {
        _id: "69451d5bc9ea67e4c930f698",
        userId: "6942b3bd2a93a220baa331b3",
        title: "Learn How to make 100k in 10 days",
        style: "Bold & Graphic",
        aspect_ratio: "16:9",
        color_scheme: "vibrant",
        text_overlay: true,
        image_url: thumb_2,
        prompt_used: "add cash images graph and etc",
        user_prompt: "add cash images graph and etc",
        isGenerating: false,
        createdAt: "2025-12-19T09:39:39.971Z",
        updatedAt: "2025-12-19T09:40:05.084Z",
        __v: 0,
    },
    {
        _id: "6943fb409fa048268a04f105",
        userId: "6942b3bd2a93a220baa331b3",
        title: "Learn NextJS 16 with a Project",
        style: "Bold & Graphic",
        aspect_ratio: "16:9",
        color_scheme: "vibrant",
        text_overlay: true,
        image_url: thumb_3,
        prompt_used: "add human with laptop",
        user_prompt: "add human with laptop",
        isGenerating: false,
        createdAt: "2025-12-18T13:01:52.205Z",
        updatedAt: "2025-12-18T13:02:13.766Z",
        __v: 0,
    },
    {
        _id: "6943e8c763d3d5ec3e4f5c8c",
        userId: "6942b3bd2a93a220baa331b3",
        title: "Learn how to use Photoshop",
        style: "Bold & Graphic",
        aspect_ratio: "16:9",
        color_scheme: "vibrant",
        text_overlay: true,
        image_url: thumb_4,
        prompt_used: "",
        user_prompt: "",
        isGenerating: false,
        createdAt: "2025-12-18T11:43:03.281Z",
        updatedAt: "2025-12-18T11:43:24.982Z",
        __v: 0,
    },
    {
        _id: "6943e2220611d25b40e529b3",
        userId: "6942b3bd2a93a220baa331b3",
        title: "Make Burger in 30 min",
        style: "Photorealistic",
        aspect_ratio: "1:1",
        color_scheme: "vibrant",
        text_overlay: true,
        image_url: thumb_5,
        isGenerating: false,
        createdAt: "2025-12-18T11:14:42.466Z",
        updatedAt: "2025-12-18T11:15:04.260Z",
        __v: 0,
    },
    {
        _id: "6943e04c0611d25b40e529ac",
        userId: "6942b3bd2a93a220baa331b3",
        title: "Learn Full Stack Development",
        style: "Bold & Graphic",
        aspect_ratio: "16:9",
        color_scheme: "vibrant",
        text_overlay: true,
        image_url: thumb_6,
        isGenerating: false,
        createdAt: "2025-12-18T11:06:52.555Z",
        updatedAt: "2025-12-18T11:07:18.715Z",
        __v: 0,
    },
    {
        _id: "6943d68d5b9fed7040154a0f",
        userId: "6942b3bd2a93a220baa331b3",
        title: "Learn ReactJS in 2 hours",
        style: "Bold & Graphic",
        aspect_ratio: "16:9",
        color_scheme: "ocean",
        text_overlay: true,
        image_url: thumb_7,
        isGenerating: false,
        createdAt: "2025-12-18T10:25:17.135Z",
        updatedAt: "2025-12-18T10:25:41.648Z",
        __v: 0,
    },
];




export const yt_html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>YouTube</title>

  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            yt: '#0f0f0f',
            yt2: '#181818',
            ytBorder: '#303030',
          },
        },
      },
    };
  </script>

  <script src="https://unpkg.com/lucide@latest"></script>
</head>

<body class="dark bg-yt text-white font-sans">

<!-- ================= HEADER ================= -->
<header class="fixed top-0 left-0 right-0 z-50 bg-yt flex items-center justify-between px-4 h-14">
  <div class="flex items-center gap-4">
    <i data-lucide="menu"></i>
    <svg width="90" height="20" viewBox="0 0 93 20">
      <rect width="30" height="20" rx="4" fill="#ff0000"/>
      <polygon points="12,5 12,15 20,10" fill="white"/>
      <text x="38" y="15" fill="white" font-size="14">YouTube</text>
    </svg>
  </div>

  <div class="flex items-center gap-4">
    <i data-lucide="bell"></i>
    <a href="%%CHANNEL_URL%%" target="_blank">
      <img src="https://i.pravatar.cc/40?u=purva" class="size-8 rounded-full" />
    </a>
  </div>
</header>

<!-- ================= LAYOUT ================= -->
<div class="flex pt-14">

<!-- ========== SIDEBAR ========== -->
<aside class="fixed left-0 top-14 bottom-0 w-60 bg-yt px-3 py-4 hidden lg:block">
  <nav class="space-y-2">
    <a class="flex items-center gap-4 px-3 py-2 rounded-lg bg-yt2">
      <i data-lucide="home"></i> Home
    </a>
     <a class="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-yt2"><i data-lucide="library"></i> Library</a>
                         <a class="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-yt2"><i data-lucide="history"></i> History</a>
                         <a class="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-yt2"><i data-lucide="clock"></i> Watch later</a>
                       <a class="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-yt2"><i data-lucide="thumbs-up"></i> Liked videos</a>

    <hr class="border-ytBorder" />

    <p class="px-3 text-xs text-gray-400 uppercase">Subscriptions</p>

    <!-- 🔥 YOUR CHANNEL -->
    <a href="%%CHANNEL_URL%%" target="_blank"
      class="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-yt2">
      <img src="https://i.pravatar.cc/36?u=purva" class="rounded-full size-7" />
      %%CHANNEL_NAME%%
    </a>

   
  </nav>
</aside>

<!-- ========== MAIN CONTENT ========== -->
<main class="lg:ml-60 w-full px-6 py-6">

<!-- VIDEO GRID -->


<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <!-- CARD -->
                        <article>
                            <img src="https://picsum.photos/600/340?1" class="rounded-xl" />
                            <div class="flex gap-3 mt-3">
                                <img src="https://i.pravatar.cc/36?1" class="rounded-full h-9 w-9" />
                                <div>
                                    <h3 class="font-semibold line-clamp-2">Breaking MASS Hiring – TCS, IBM | Tech Mahindra</h3>
                                    <p class="text-sm text-gray-400">Online Learning</p>
                                    <p class="text-sm text-gray-400">12K views • 23 hours ago</p>
                                </div>
                            </div>
                        </article>

                        <article>
                            <img src="https://picsum.photos/600/340?2" class="rounded-xl" />
                            <div class="flex gap-3 mt-3">
                                <img src="https://i.pravatar.cc/36?2" class="rounded-full h-9 w-9" />
                                <div>
                                    <h3 class="font-semibold line-clamp-2">My 6 Year Journey as a Backend Developer</h3>
                                    <p class="text-sm text-gray-400">Genie Ashwani</p>
                                    <p class="text-sm text-gray-400">28K views • 3 weeks ago</p>
                                </div>
                            </div>
                        </article>

                        <article>
                            <img src="https://picsum.photos/600/340?3" class="rounded-xl" />
                            <div class="flex gap-3 mt-3">
                                <img src="https://i.pravatar.cc/36?3" class="rounded-full h-9 w-9" />
                                <div>
                                    <h3 class="font-semibold line-clamp-2">Spring Boot Project Tutorial – REST API + JWT</h3>
                                    <p class="text-sm text-gray-400">Faisal Memon</p>
                                    <p class="text-sm text-gray-400">2.5K views • 17 hours ago</p>
                                </div>
                            </div>
                        </article>

                        <article>
  <img src="%%THUMBNAIL_URL%%" class="rounded-xl aspect-video object-cover" />
  <div class="flex gap-3 mt-3">
    <img src="https://i.pravatar.cc/36?u=purva" class="rounded-full h-9 w-9" />
    <div>
      <h3 class="font-semibold line-clamp-2">%%TITLE%%</h3>
      <a href="%%CHANNEL_URL%%" target="_blank"
         class="text-sm text-gray-400 hover:text-white">
        %%CHANNEL_NAME%%
      </a>
      <p class="text-sm text-gray-400">12K views • 1 day ago</p>
    </div>
  </div>
</article>

                        <article>
                            <img src="https://picsum.photos/600/340?5" class="rounded-xl" />
                            <div class="flex gap-3 mt-3">
                                <img src="https://i.pravatar.cc/36?5" class="rounded-full h-9 w-9" />
                                <div>
                                    <h3 class="font-semibold line-clamp-2">Full course: Build a production app with Next.js</h3>
                                    <p class="text-sm text-gray-400">Academy Channel</p>
                                    <p class="text-sm text-gray-400">4.8M views • 1 year ago</p>
                                </div>
                            </div>
                        </article>

                        <article>
                            <img src="https://picsum.photos/600/340?6" class="rounded-xl" />
                            <div class="flex gap-3 mt-3">
                                <img src="https://i.pravatar.cc/36?6" class="rounded-full h-9 w-9" />
                                <div>
                                    <h3 class="font-semibold line-clamp-2">Short: Amazing CSS trick</h3>
                                    <p class="text-sm text-gray-400">Design Byte</p>
                                    <p class="text-sm text-gray-400">95K views • 4 days ago</p>
                                </div>
                            </div>
                        </article>

                        <article>
                            <img src="https://picsum.photos/600/340?7" class="rounded-xl" />
                            <div class="flex gap-3 mt-3">
                                <img src="https://i.pravatar.cc/36?7" class="rounded-full h-9 w-9" />
                                <div>
                                    <h3 class="font-semibold line-clamp-2">React 18 new features — what's changed?</h3>
                                    <p class="text-sm text-gray-400">Frontend Focus</p>
                                    <p class="text-sm text-gray-400">10K views • 6 days ago</p>
                                </div>
                            </div>
                        </article>

                        <article>
                            <img src="https://picsum.photos/600/340?8" class="rounded-xl" />
                            <div class="flex gap-3 mt-3">
                                <img src="https://i.pravatar.cc/36?8" class="rounded-full h-9 w-9" />
                                <div>
                                    <h3 class="font-semibold line-clamp-2">Top 20 music tracks this month — playlist</h3>
                                    <p class="text-sm text-gray-400">Music Hub</p>
                                    <p class="text-sm text-gray-400">1.1M views • 3 days ago</p>
                                </div>
                            </div>
                        </article>

                        <article>
                            <img src="https://picsum.photos/600/340?9" class="rounded-xl" />
                            <div class="flex gap-3 mt-3">
                                <img src="https://i.pravatar.cc/36?9" class="rounded-full h-9 w-9" />
                                <div>
                                    <h3 class="font-semibold line-clamp-2">Top 20 music tracks this month — playlist</h3>
                                    <p class="text-sm text-gray-400">Music Hub</p>
                                    <p class="text-sm text-gray-400">1.1M views • 3 days ago</p>
                                </div>
                            </div>
                        </article>
                    </section>
</main>
</div>

<script>
  lucide.createIcons();
</script>

</body>
</html>
`;
