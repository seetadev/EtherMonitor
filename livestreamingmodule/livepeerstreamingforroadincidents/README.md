# Livepeer.com API utilization for Road Incidents. 

We are using Livepeer as the key infrastructure provider for online video streaming of critical road incidents ( Please find the video at https://drive.google.com/drive/folders/1lxeHbPzLoF0DzDZkh9N7Z_5aTKjmdEza (screencapturewithoutsound.mov file and roadincidentmanagement.mp4)). We are using Livepeer at: Live streaming with Object Detection Video Analytics using Livepeer for streaming; Camera Management: Add/edit/delete cameras with integration with Livepeer.

This is an app to use Livepeer.com APIs to create a live stream for effective design, engineering and delivery of blockchain technology aided solution for vehicles and citizens to make roads safer and better for everyone using predictive analytics and automation. The app enables the user to create a stream and play it back.

**Note: To start a video stream, please use a broadcaster software like OBS/Streamyard on desktop, or Larix on mobile**

The app uses POST [/stream](https://livepeer.com/docs/guides/api/create-a-stream) endpoint to create a new stream.

Information on the API and the endpoints availble, please check the [Livepeer.com API documentation](https://livepeer.com/docs/guides).

**Note: You will need an API Key to use this application**

### Steps to acquire an API key:

- Sign up/ Log in to Livepeer.com
- On the dashboad click on API Keys tab
- Click on "Create" to create an API Key

You can enter this API key in the demo app.

### Tech note:

This app uses NextJS api routes to communicate with the Livepeer.com API. Checkout `pages/api/stream` directory for the relevant code.
