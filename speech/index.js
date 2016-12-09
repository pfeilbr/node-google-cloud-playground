const fs = require('fs')

var speech = require('@google-cloud/speech')({
  projectId: 'appfarm',
  keyFilename: '/Users/pfeilbr/Downloads/appfarm-afcac3b17531.json'
})

const speechToTextExample = () => {
  // audio is "one two three"
  const audioFilePath = './speech.flac'
  speech.recognize({content: fs.readFileSync(audioFilePath)}, {
    encoding: 'FLAC',
    sampleRate: 16000
  }, function(err, transcript) {
    // transcript = 'one two three'
    if (err) {
      return console.error(err)
    }
    console.log(transcript)
  })
}

speechToTextExample()
