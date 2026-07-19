---
title: "My Atelier game crashes immediately, how do I fix this?"
pubDate: "2021-10-20"
updatedDate: "2022-08-31"
heroImage: "/media/blog/2021/10/troubleshooting/thumb.webp"
description: "Some can't boot the game at all, and no useful error messages show up. Here's a handful of instructions that should work."
author: "Chloe"
tags: [Atelier Series, Troubleshooting]
---

Some can't boot the game at all, and no useful error messages show up. Here's a handful of instructions that should work.

To be clear, this set of instructions should work for the following games:

* Rorona
* Totori
* Meruru
* Ayesha
* Escha & Logy
* Shallie
* Sophie
* Firis
* Lydie & Suelle
* Lulua
* Ryza
* Ryza 2
* Nelke

# Troubleshooting

You can first try booting the game from the direct EXE instead of Steam to see if an error message pops. This is located in `SteamLibrary\steamapps\common`

Usually you have multple EXE files, you'll be looking for any that don't have launcher or Env in the name.

If you don't see any particular errors, you can try all this stuff. These are listed in increasing order of 'throw everything at the wall and see what sticks'.

1. In Steam, right click your game -> properties -> local files -> verify integrity
2. If you are on a version of Windows that does not come with Media Player, [download the Media Feature Pack](https://www.microsoft.com/en-us/software-download/mediafeaturepack)
3. Update your graphics driver. Do not rely on Windows; go to the manufacturer website.
4. Install the [C++ Redistributables](https://github.com/abbodi1406/vcredist/releases/download/v0.61.0/VisualCppRedist_AIO_x86_x64_61.zip). 
5. Install the latest version of [DirectX](https://support.microsoft.com/en-us/topic/how-to-install-the-latest-version-of-directx-d1f5ffa5-dae2-246c-91b1-ee1e973ed8c2).
6. Install the latest [.NET Framework](https://dotnet.microsoft.com/download/dotnet-framework).
7. If you are on really old GPUs, they may not support the  video encoding. You can take the whole movies folder and move it; the game will skip movies safely. The location of movies vary by game, but they won't be far from the EXE location.

# My game crashes immediately after 'start game' or in the first few minutes

If you are on a laptop, you are likely running on integrated graphics rather than GPU.

Open nVIDIA Control Panel > Manage 3D Settings > Program Settings > Add > Add the executable game file > OK

# It still isn't fixed

This is the hard part.

First, **boot the game and let it crash**. You might try direct from the EXE rather than Steam's launcher, as explained in the troubleshooting section. Take note of what time you did this, wait a couple minutes to be sure Windows takes note of this event properly.

Press **Windows + R**, type in **eventvwr** and press okay to open Event Viewer.

You're going to look for events labeled as Error around the time of your game's last crash. You will look for these in the following two places:

1. Custom Views -> Administrative Events
2. Windows Logs -> Application

<div class="col-12"><img src="/media/blog/2021/10/troubleshooting/eventviewer.webp" load="lazy"></div>

Example screenshot is from a random application failure; do not expect your error to look like it. You will most likely see a reference to an executable you would recognize, such as A18.exe or AtelierAyeshaEN.exe.

When you've found what you're looking for, copy the details in the box under general. If it references DLL files, google them. If you can't figure it out, post to a forum, Discord chat, trusted tech friend, etc., that can help you.