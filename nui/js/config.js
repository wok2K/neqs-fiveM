// ██████╗ ███████╗███╗   ██╗███████╗██████╗  █████╗ ██╗          ██████╗ ██████╗ ███╗   ██╗███████╗██╗ ██████╗ 
//██╔════╝ ██╔════╝████╗  ██║██╔════╝██╔══██╗██╔══██╗██║         ██╔════╝██╔═══██╗████╗  ██║██╔════╝██║██╔════╝ 
//██║  ███╗█████╗  ██╔██╗ ██║█████╗  ██████╔╝███████║██║         ██║     ██║   ██║██╔██╗ ██║█████╗  ██║██║  ███╗
//██║   ██║██╔══╝  ██║╚██╗██║██╔══╝  ██╔══██╗██╔══██║██║         ██║     ██║   ██║██║╚██╗██║██╔══╝  ██║██║   ██║
//╚██████╔╝███████╗██║ ╚████║███████╗██║  ██║██║  ██║███████╗    ╚██████╗╚██████╔╝██║ ╚████║██║     ██║╚██████╔╝
// ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝     ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝     ╚═╝ ╚═════╝ 

const Config = new Object();

Config.MusicPlayer = {
    tracks : [
        { name: "Bloodhound Lil Jeff - BIG 3", audio: "./assets/big3.mp3", video: "./assets/big3.mp4", cover: "./assets/BIG 3LLJEFF.png" },
        { name: "Ice Spice - Did It First", audio: "./assets/diditfirst.mp3", video: "./assets/diditfirst.mp4", cover: "./assets/icespize.png" },
        { name: "Heembeezy - When You Call", audio: "./assets/whenyoucall.mp3", video: "./assets/whenyoucall.mp4", cover: "./assets/heembeezy.png" },
    ]
}

Config.Title = { 
    title : "BABYORK CITY", 
    subtitle : "Season One" 
}

Config.ServerInformation = {
    title : "SERVER INFORMATION",
    subtitle : "",
    infos : [
        { info : "GTA Park Roleplay is a serious role-playing server that is a hybrid of a text game and a voice game. Make sure you read the server rules carefully so you don't get jailed, banned or kicked by the Admin. Enjoy the server!" },
    ]
}

Config.ServerRules = {
    title : "SERVER RULES",
    subtitle : "",
    rules : [
        { title: "Rule: 1", description : "Make sure you stay in character at all times." },
        { title: "Rule: 2", description : "Be sure to leave all Discord Calls before connecting." },
        { title: "Rule: 3", description : "Be sure to close all tabs before loading." },
    ]
}

Config.Staff = {
    title : "PROJECT TEAM",
    subtitle : "",
    members : [
        {name : "neq", role :"Owner", avatar:"https://files.catbox.moe/11fjcq.png"},
        {name : "idk", role :"Developer", avatar:"https://files.catbox.moe/zvya19.png"},
    ]
}

Config.SocialMedia = []

Config.BackgroundSettings = {
    background_source : "",
    background_sound_source : "",
    background_video_path : "",
    background_music_path : "",
    default_sound_volume : 25
}

Config.Locales = {
    Welcome : "WELCOME TO",
    Sound : "Volume",
    Loading : "Loading in progress, please wait...",
}
