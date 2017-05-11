# CodeSchool-Download

Easliy Download CodeSchool Course videos.

### Prerequisites

You need to have NodeJs >= 6 installed on your system to use this downloader.

### Installing

You will have to install this package globally in your system

```
npm i -g codeschool-download
```

### Usage

Once you have installed this package, Create a directory in which you want to save downloaded codeschool videos. Inside That directory run this program.

Example for linux/mac:
```
mkdir codeschool-videos
cd codeschool-videos
codeschool-download
```

Downloading Code School videos from this program is a two step process:

- First you need to extract the links of the courses you want to download. This will create a 'courses.json' file in current working directory and save all the extracted information needed to download the videos in that file. 

- Once you have extracted the information to download videos and have it saved in 'courses.json' file, you can select any of those courses to download

#### Extraction of video information
When you select the extraction process, the program asks you for codeschool username(email) and password. Once you provide this info, it opens a browser window, logs you into website and provides you a list of all the courses codeschool provides to choose from.

Then you can choose the courses that you want to extract information for. This will extract the information from codeschool website and save it in `courses.json` file.
You can press `a` to select all courses.
(It is okay to extract all videos as it does not send a lot of traffic on codeschool servers.)

#### Downloading Videos
When you select the download process, the program will look at the `courses.json` file and ask you what course you want to download from the courses you have already extracted and saved in `courses.json`.
(Again you can type `a` to download all extracted courses, though this is not recommended, instead select the courses you are currently intrested in and download just them and be good to codeschool.)

All the downloaded videos will be saved with sensible name in the directory of the course name.