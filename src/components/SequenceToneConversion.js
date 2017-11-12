export default class SequenceToneConversion  {

  constructor(sequence){
    this.DEBUG = true;
    this.sequence = sequence;
    this.sequence_length = sequence.length;
    this.sequence_converted = [];

    this.mapping_tones = {
      'A': {
        tone: 'C4',
        color: '#fff'
      },
      'G': {
        tone: 'E4',
        color: '#fff'
      },
      'C': {
        tone: 'G4',
        color: '#fff'
      },
      'T': {
        tone: 'B4',
        color: '#fff'
      },
    };
  }

  _convertSequence(){
    for(let i=0; i<this.sequence_length;i++){

    }
  }

}
