# vStrap Example

This is an example of how to use the [vStrap](https://github.com/infolock/vstrap) library components.

Given I'm still working out how this is going to be organized, things like the directory structure are going to be a little bit mixed up at first...

Currently, you can find everything that's important in the `public` folder.  The immediately obvious thing to be seen is that the [vStrap](https://github.com/infolock/vstrap) js components have been manually copied into the the `components` folder.  This is just temporary and will go away once I've gotten everything established.

## Running the Examples
The examples run in a HMR node environment.  Getting started is pretty simple, just run the following commands:
- `npm install`
- `npm run build`
- `npm run start`

Once you start, you'll have a running instance available at [http://localhost:8080](http://localhost:8080).

## Gotchas
Bootstrap (by default) uses jQuery.  This comes with some convenience operations like the jQuery plugin system.  This also comes complete with some rendering behaviors and auto attachments of some events.   These are the very things that I don't want in my application as I want to choose when/how these things are rendered, when the events are attached (and how!), etc. etc.

The patterns we'll use for this will become more self-evident as this repository matures.  Long story short, be patient as this is built out.  For now, you can enjoy the show and just observe the build as it progresses.

Thanks!
-Jon
