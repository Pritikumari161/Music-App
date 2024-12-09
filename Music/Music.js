const playIcon = document.querySelector("#play")
const audioFile = document.querySelector("audio")

let isAudioPlaying = false

function playTheAudio()
{
    audioFile.play()
    isAudioPlaying = true
    playIcon.classList.replace("fa-play", "fa-pause")//fa-solid fa-pause
}

function pauseTheAudio()
{
    audioFile.pause()
    isAudioPlaying = false
    playIcon.classList.replace("fa-pause", "fa-play")//fa-solid fa-play
}

playIcon.addEventListener("click", function()
{
    // Logic to play the audio once and also pause the audio once
    if(isAudioPlaying)
    {
        pauseTheAudio()
    }
    else
    {
        playTheAudio()
    }
})

// Forward Button
// Image, Audio, Song Name, Singer Name

const myImage = document.querySelector("img")
const mySongName = document.querySelector("h1")
const mySingerName = document.querySelector("h2")

const songsData = [
    {
        image: "Images/Images4.jpg ",
        audio: "Audio/Audio2.mp3",
        singerName: "DEF Singer",
        songName: "DEF Song"
    },
    {
        image: "Images/img5.jpg",
        audio: "Audio/Audio3.mp3",
        singerName: "GHI Singer",
        songName: "GHI Song"
    },
    {
        image: "Images/img6.jpg",
        audio: "Audio/Audio4.mp3",
        singerName: "XYZ Singer",
        songName: "XYZ Song"
    }
]

const forwardIcon = document.querySelector("#forward")
const backwardIcon = document.querySelector("#backward")
function changeData(info)
{
    // Logic to change the data
    myImage.src = info.image//"IMAGES/image2.jpg"
    audioFile.src = info.audio
    mySongName.textContent = info.songName
    mySingerName.textContent = info.singerName   
}

let songIndex = 0

forwardIcon.addEventListener("click", function()
{
    if(songIndex > songsData.length - 1)
    {
        songIndex = 0
    }

    changeData(songsData[songIndex])
    playTheAudio()
    songIndex++
})

backwardIcon.addEventListener("click", function() {
    if (songIndex < songsData.length - 1) {

        songIndex = 0
    } 
    else {
        songIndex--
    }

    changeData(songsData[songIndex])
    playTheAudio()
    
})


// How to get the totalTime of audioFile???
// timeupdate event will get the time related information(current time and total time) of that audio file

const myTotalTime = document.querySelector(".totalTime")
const myCurrentTime = document.querySelector(".currentTime")
const myMovableContainer = document.querySelector(".movableContainer")

audioFile.addEventListener("timeupdate", function(output)
{
    let fetchedCurrentTime = output.srcElement.currentTime
    let fetchedDuration = output.srcElement.duration

    let percentageOfTotalAudioPlayed = fetchedCurrentTime / fetchedDuration * 100
    
    myMovableContainer.style.width = `${percentageOfTotalAudioPlayed}%`

    // fetchedDuration = 193.59 seconds = 3min 13sec

    let durationInMinutes = Math.floor(fetchedDuration / 60) //3min
    let durationInSeconds = Math.floor(fetchedDuration % 60) //13sec

    myTotalTime.textContent =`${durationInMinutes}:${durationInSeconds}`//3:13


    let currentTimeInMinutes = Math.floor(fetchedCurrentTime / 60) 
    let currentTimeInSeconds = Math.floor(fetchedCurrentTime % 60) 

    if(currentTimeInSeconds < 10)
    {
        currentTimeInSeconds = `0${currentTimeInSeconds}`
    }

    myCurrentTime.textContent =`${currentTimeInMinutes}:${currentTimeInSeconds}`
})

// Math.floor(2.45) ==> 2

// currentApples = 10
// totalApples = 50

// What is the percentage of Apples consumed?

// 10 / 50 * 100 = 20%

// currentTime = ---
// totalTime = ---

// What is the percentage of Audio played?

// currentTime / totalTime * 100 = Percentage of the audio played

const heartIcon = document.querySelector("#heart")

heartIcon.addEventListener("click", function()
{
    // Change the color to red
    heartIcon.style.color = "red"

    // We can store the song details inside the localstorage(browser)
    localStorage.setItem(mySongName.textContent, mySingerName.textContent)
})

// Browser normally contains 2 types of storage
// 1) localstorage - for a long time(permanently)
// 2) sessionstorage - for a short time


const shuffleIcon = document.querySelector("#shuffle")

shuffleIcon.addEventListener("click", function()
{
    // Logic to play the song in a random order, 
    // i want to generate song index in random order

    // 0, 1 and 2

    let randomsongIndex = Math.floor(Math.random() * 3)//0 and 1 0.45, 0.673, ...
    // 0 and 1 * 3 ==> 0 to 3

    changeData(songsData[randomsongIndex])
    playTheAudio()

})