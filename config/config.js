// ██████╗ ███████╗███╗   ██╗███████╗██████╗  █████╗ ██╗          ██████╗ ██████╗ ███╗   ██╗███████╗██╗ ██████╗ 
//██╔════╝ ██╔════╝████╗  ██║██╔════╝██╔══██╗██╔══██╗██║         ██╔════╝██╔═══██╗████╗  ██║██╔════╝██║██╔════╝ 
//██║  ███╗█████╗  ██╔██╗ ██║█████╗  ██████╔╝███████║██║         ██║     ██║   ██║██╔██╗ ██║█████╗  ██║██║  ███╗
//██║   ██║██╔══╝  ██║╚██╗██║██╔══╝  ██╔══██╗██╔══██║██║         ██║     ██║   ██║██║╚██╗██║██╔══╝  ██║██║   ██║
//╚██████╔╝███████╗██║ ╚████║███████╗██║  ██║██║  ██║███████╗    ╚██████╗╚██████╔╝██║ ╚████║██║     ██║╚██████╔╝
// ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝     ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝     ╚═╝ ╚═════╝ 

const Config = new Object();

Config.MusicPlayer = {
    tracks : [
        { name: "Bloodhound Lil Jeff - BIG 3", audio: "./assets/BIG 3 bloodhound lil jeff.mp3", video: "./assets/Bloodhound_Lil_Jeff_x_Bloodhound_Q50_x_Slimeto_-_BIG_3_Official_Video_Dir._Yardiefilms_-_Yardie_Films_Production_1080p_h264.mp4", cover: "./assets/BIG 3LLJEFF.png" },
        { name: "Ice Spice - Did It First", audio: "./assets/Did it First ice spice.mp3", video: "./assets/Ice_Spice_Central_Cee_-_Did_It_First_-_IceSpiceVEVO_1080p_h264.mp4", cover: "./assets/icespize.png" },
        { name: "Heembeezy - When You Call", audio: "./assets/When You call - heembeezy.mp3", video: "./assets/8K_x_Heembeezy_-_When_You_Call_Official_Music_Video_Dir._by_Kevin_Mora_-_Moraculous_1080p_h264.mp4", cover: "./assets/heembeezy.png" },
    ]
}

Config.Title = { 
    title : "GTA Park Roleplay", 
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

Config.Locales = {
    Welcome : "WELCOME TO",
    Sound : "Volume",
    Loading : "Loading in progress, please wait...",
}
