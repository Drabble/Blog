This application let users discover mountain bike tracks by exploring them on a map and gives the following details on each track : the track itself drawn on the map, the altimetry profile and distance.

In addition, they would also be able to start their own mountain bike activity, tracked by the location of their smartphone letting them know if they are following or not the desired track. Typical data is also exposed like distance, time, current elevation, cumulate elevation and so on.

If the biker has any problem, an emergency call button will let him send his location to his predefined secure contacts.

All tracks are locally registered in the smartphone and users are able to consult them any time. They also may be shared with users' contacts (by email or another messaging app).

This project was realised by Damien Rochat, Sébastien Richoz et Antoine Drabble as part of the "Mobile operating systems and applications" courses at the MSE, HES-SO. It is supervised by the professor Pascal Bruegger. It was realised between october 2017 and january 2018.

Checkout the project on Github [https://github.com/damienrochat/BikeTracks](https://github.com/damienrochat/BikeTracks)

<img src="assets/posts/2018-01-17-bike-tracks/3.webp" alt="Bike tracks" title="Bike tracks" />

*Logo*

**API**

The API contains two endpoints to retrieve the tracks.

1. GET /tracks?lat=X&lng=Y&radius=Z : Retrieve the tracks in a given region defined by a circle:

- Center [lat,lng] : The GPS coordinates corresponding to the center of the currently seen map on the smartphone.
- Radius [m] : The diagonal of the screen divided by two.

The following picture shows the area to look for the tracks. The red dot is the center of the map and the yellow line is the radius. The Google Map API helps us to retrieve easily these values.

<img src="assets/posts/2018-01-17-bike-tracks/5.webp" alt="Bike tracks" title="Bike tracks" />

*Geo query*

If any centroid is contained it this circle, the corresponding track will be retrieved to the user. The biggest the radius is, the less point will be retrieved for each track to avoid overloading the bandwidth and obviously get the tracks faster. It doesn't impact the quality of the drawn path on the map as the user zooms out because he won't be able to distinguish so many points. A track may contain from 3600 (a 1 hour activity) up to 18'000 points (5 hours) if there are measured every second.

2. GET /tracks/{id} : Retrieve one track with all of its points. When a user focuses on a track, the whole details are needed.

**Track file format**

GPX track files could be used to fill the API. Here is an example of a .gpx file.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<gpx xmlns="http://www.topografix.com/GPX/1/1" version="1.1" creator="Creator_name">
  <trk>
    <name>Name_of_the_track</name>
    <type>Downhill|Freeride|Enduro|Xcountry</type>
    <trkseg>
      <trkpt lat="46.78888733" lon="6.74366133">
        <ele>449.0</ele>
        <time>2017-09-22T10:11:35.000Z</time>
      </trkpt>
      ...
    </trkseg>
  </trk>
</gpx>
```
The file is in XML with its own markup tags. To retrieve information on the track, we extract from tag <trk> the name, type and all the points defining the track. These points are included in tag <trkseg> which includes <trkpt> containing the needed data, that is the latitutde, longitude, elevation and time.

The backend extracts these informations and store them in a PostgreSQL database, using a custom command. During this process, the centroid is computed and stored to avoid calculating it over and over every time a GET request is made. More information about the command : https://github.com/damienrochat/BikeTracks-API#import-gpx-files

Then the API will return the tracks in a JSON format.

**Mobile app**

The application uses two activities : one main activity as the entry point and an activity "Detail of my track" displayed to show details of user's track.

The main activity loads three fragments depending the touched button in the menu : Map, My tracks or Settings.

"Map" Fragment displays the tracks and their detail from the API and let user record their own activity.
"My tracks" Fragment relates the history of tracks recorded by user.
"Settings" Fragment is where the user sets the secure contacts.
The Fragment "Detail of my track" obviously displays the details of a track done by the user.

Let's focus on each component for a deeper analyze.

<img src="assets/posts/2018-01-17-bike-tracks/8.webp" alt="Bike tracks" title="Bike tracks" />
<img src="assets/posts/2018-01-17-bike-tracks/10.webp" width="49%" alt="Bike tracks" title="Bike tracks" />
<img src="assets/posts/2018-01-17-bike-tracks/9.webp" width="49%" alt="Bike tracks" title="Bike tracks" />
<img src="assets/posts/2018-01-17-bike-tracks/11.webp" width="49%" alt="Bike tracks" title="Bike tracks" />
<img src="assets/posts/2018-01-17-bike-tracks/12.webp" width="49%" alt="Bike tracks" title="Bike tracks" />

*Screenshots from the app*

**Architecture**

The Android application was developed in Java. Some frameworks and tools took part of the app to simplify its development.

<img src="assets/posts/2018-01-17-bike-tracks/7.webp" alt="Bike tracks" title="Bike tracks" />

*Technologies we used*

**Notifications**

We have set up a notification to notify the user when an activity is being recorded. The notification is also shown in the lock screen as we can see in the image below. We would like to add controls in the near future to allow the user to manage his activity (pause, stop...) without having to unlock his phone.

<img src="assets/posts/2018-01-17-bike-tracks/16.webp" alt="Bike tracks" title="Bike tracks" />
<img src="assets/posts/2018-01-17-bike-tracks/17.webp" alt="Bike tracks" title="Bike tracks" />

*Notifications from the app*