We are trying to utilize ethpass to enable ticketing and royalty management by Ministry of Road and Transportation for a variety of sharing of government assets like toll prepaid card, car details information for interstate travel, driving license management and quarterly pollution check and control, customer bonus points. Please find the video at https://drive.google.com/drive/folders/1lxeHbPzLoF0DzDZkh9N7Z_5aTKjmdEza (screencapturewithoutsound.mov file and roadincidentmanagement.mp4)). We are also using it for decentralized social sharing of road incident data (please visit  Decentralizedroadcounselingatincidents.mov)


# Setup
deploy contract on blockchain:  
  `launch testrpc`  
  `node deploy.js`  

  copy first line of output from `node deploy.js` into contract.js (into the contractInfoJson var)

build js:  
  `browserify app.js -o bundle.js`


