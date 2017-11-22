import React, { Component } from 'react';
// import './global/css/CalcORF.css';
import  SequenceToneConversion from './SequenceToneConversion';
import './global/css/SequenceToneCOnversion.css';
import InputRange from 'react-input-range';
import Tone from 'tone';
import MappingTone from './global/data/mapping_genetic_code.json';
import NOTES from './global/data/notes.json';

class SquenceRepresentation extends Component {

  constructor(props){
    super(props);
    this.mapping_tones = MappingTone;
    this.toneSequence = null;
    this.toneSequenceArray =[];
    this.seq =  null;
    this.tone_trasport = Tone.Transport;
    this.tone_count = 0;
    this.piano = new Tone.Sampler({
			'A0' : 'A0.[mp3|ogg]',
			'C1' : 'C1.[mp3|ogg]',
			'D#1' : 'Ds1.[mp3|ogg]',
			'F#1' : 'Fs1.[mp3|ogg]',
			'A1' : 'A1.[mp3|ogg]',
			'C2' : 'C2.[mp3|ogg]',
			'D#2' : 'Ds2.[mp3|ogg]',
			'F#2' : 'Fs2.[mp3|ogg]',
			'A2' : 'A2.[mp3|ogg]',
			'C3' : 'C3.[mp3|ogg]',
			'D#3' : 'Ds3.[mp3|ogg]',
			'F#3' : 'Fs3.[mp3|ogg]',
			'A3' : 'A3.[mp3|ogg]',
			'C4' : 'C4.[mp3|ogg]',
			'D#4' : 'Ds4.[mp3|ogg]',
			'F#4' : 'Fs4.[mp3|ogg]',
			'A4' : 'A4.[mp3|ogg]',
			'C5' : 'C5.[mp3|ogg]',
			'D#5' : 'Ds5.[mp3|ogg]',
			'F#5' : 'Fs5.[mp3|ogg]',
			'A5' : 'A5.[mp3|ogg]',
			'C6' : 'C6.[mp3|ogg]',
			'D#6' : 'Ds6.[mp3|ogg]',
			'F#6' : 'Fs6.[mp3|ogg]',
			'A6' : 'A6.[mp3|ogg]',
			'C7' : 'C7.[mp3|ogg]',
			'D#7' : 'Ds7.[mp3|ogg]',
			'F#7' : 'Fs7.[mp3|ogg]',
			'A7' : 'A7.[mp3|ogg]',
			'C8' : 'C8.[mp3|ogg]'
		}, {
			'release' : 1,
			'baseUrl' : './audio/salamander/'
		}).toMaster();
    this.synth = new Tone.Synth().toMaster();

    this.state = {
      sequence: props.sequence,
      codeElement: 20,
      drawedData: false,
      toneSequence: [],
      toneSequenceArray: [],
      runTones: false,
      basicSynth: new Tone.OmniOscillator().toMaster(),
      selectedSound: 'instrument',
    };

    this.ViolinPlayer = new Tone.Player("./audio/instruments/violin.ogg").toMaster();
    this.PianoPlayer = new Tone.Player("./audio/instruments/electric_piano.ogg").toMaster();
    this.GuitarPlayer = new Tone.Player("./audio/instruments/acustic_guitar.ogg").toMaster();
    this.BassPlayer = new Tone.Player("./audio/instruments/bass.ogg").toMaster();
    this.TrombonePlayer = new Tone.Player("./audio/instruments/trombone.ogg").toMaster();

    this.toneTesting();

    this._onClickDrawButton = this._onClickDrawButton.bind(this);
    this._onClickRunTones = this._onClickRunTones.bind(this);
    this.onChangeSelecteTypeSound =  this.onChangeSelecteTypeSound.bind(this);
  }


  toneTesting() {
    // synth.triggerAttackRelease("C4", 0.5, 1);
    // synth.triggerAttackRelease('E4', 0.5, 2);
    // synth.triggerAttackRelease('G4', 0.5, 3);
    // synth.triggerAttackRelease('B4', 0.5, 4);

    // synth.triggerAttackRelease('C4', '4n', '8n')
    // synth.triggerAttackRelease('E4', '8n', '4n + 8n')
    // synth.triggerAttackRelease('G4', '16n', '2n')
    // synth.triggerAttackRelease('B4', '16n', '2n + 8t')
    // synth.triggerAttackRelease('G4', '16','2n + 8t * 2')
    // synth.triggerAttackRelease('E4', '2n', '0:3')

    // var sine = new Tone.Oscillator(440, "sine").toMaster();
    //start the oscillator at 0
    // sine.start(1);
    // sine.stop(1 + 0.5);
    // let loop = new Tone.Loop(function(time){
    //   sine.start(time);
    //   sine.stop(time + 0.5);
    // }, 2);
    //loop.start(0);
    //Tone.Transport.start();

    //var osc = new Tone.OmniOscillator().toMaster();
    //let synth = new Tone.Synth().toMaster();
    //.stop(2);
    //console.log("Antes");
    //var seq = new Tone.Sequence(function(time, note){
    //  synth.triggerAttackRelease(note, "8n", time);
    //  console.log("Reproduciendo:", note);
    //}, ["C4", "E4", "G4", "A4"], 4);
    // seq.loop = false;
    //Tone.Transport.start();
    //seq.start();
    //seq.stop();

    // let synth = new Tone.Synth().toMaster();
    // let synth = new Tone.Synth().toMaster();
    // let seq = new Tone.Sequence(function(time, note){
    //   synth.triggerAttackRelease(note, 1, time);
    // }, [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 950, 1000, 1050, 1100, 2000], 1);
    // seq.loop = false;
    // Tone.Transport.start();
    // seq.start();


    //play a note every eighth note starting from the first measure
    // console.log("ntramos");
    // Tone.Transport.scheduleRepeat(function(time){
    //   console.log("daa");
    //   this.piano.triggerAttack(time);
    // }, "8n", "1m");

    // player.start();

    //this.playSequence("violin");


  }

  _onClickDrawButton(){
    let dataRender = [];
    let toneSequence = [];
    let toneSequenceArray = [];
    const sequence = this.state.sequence;
    let MAX_LINE = this.state.codeElement;

    let codon_index = 0;
    let sections = Math.ceil(sequence.length / 3); // Calculate the sections of codons

    for(let i=0;i<sections;i++){
      let codon = sequence.substr(codon_index, 3);
      if(this.mapping_tones[codon] !== undefined){
        let style = {
          width: 100/MAX_LINE + "%",
          backgroundColor: this.mapping_tones[codon].color
        };

        let element = (
            <div className={"frame-block"} key={codon+'_'+i} style={style}>{codon}</div>
        );
        dataRender.push(element);
        // toneSequence.push(this.mapping_tones[codon].frequency);
        toneSequence.push({
          'tone': this.mapping_tones[codon].tone,
          'frequency': this.mapping_tones[codon].frequency,
          'instrument':this.mapping_tones[codon].instrument,
          'color':this.mapping_tones[codon].color
        });
        toneSequenceArray.push(this.mapping_tones[codon].tone);
      }else{
        console.error("CODON: " + codon +  " Not found");
      }
      codon_index += 3;
    }
    this.setState({drawedData: true, drawedDataElement: dataRender,
      toneSequence: toneSequence, toneSequenceArray:toneSequenceArray});
  }


  _onClickRunTones(){

    if(this.state.runTones){
      console.log("Debe pausarlo");
        this.seq.removeAll();
        this.seq.cancel();
        this.tone_trasport.stop();
        this.seq.dispose ( );
        this.seq = null;
        this.setState({
          runTones: false
        });
        document.body.style.backgroundColor = "transparent";
    }else{
      console.log("Debe Iniciarlo");
      this.tone_trasport.start();
      //this.playSequence("violin", this.state.toneSequence);
      //this.playSequence("electric_piano", this.state.toneSequence);
      this.playSequence(this.state.toneSequence, this.state.selectedSound);
      // acustic_guitar
      // bass
      // trombone

      // this.seq = new Tone.Sequence((time, note) =>{
      //     // this.piano.triggerAttackRelease(note, 0.4, time);
      //   console.log(note);
      //     this.synth.triggerAttackRelease(note, 0.4, time);
      //
      //     console.log("---");
      //     this.tone_count += 1;
      //     if(this.tone_count >= this.seq.length){
      //       this.tone_count = 0;
      //       // this.setState({
      //       //   runTones: false
      //       // });
      //     }
      // }, this.state.toneSequence, 0.3);
      // this.seq.loop = false;
      // this.seq.loopEnd = 0;
      this.setState({
        runTones: true
      });
      //this.seq.start();

      // var player = new Tone.Player(file, ()=>{
        //   console.log("Entro por aca");
        //
        //   this.seq.loop = false;
        //   Tone.Transport.start();
        //   // this.tone_trasport.start();
        //   this.seq.start();
        //   // now = now.toFixed(3);
        //   // player.start(now, 0.75*2);
        //   // player.stop(now + 0.75);
        //
        //   //player.start(1, "4n");
        //   //player.stop(now + ("4n"));
        // }).toMaster();
    }
  }


  playSequence(sequence, synth){

    let file = null;
    let start_note, finish_note, start_note_index, finish_note_index, interval;
    let notes =  NOTES.notes_reverse;
    let mapping_notes_to_numbers = {};
    for(let i=0;i<notes.length;i++){
      mapping_notes_to_numbers[notes[i]] = i;
    }

    this.seq = new Tone.Sequence((time, data) => {
      if(synth === 'frequency'){
        this.synth.triggerAttackRelease(data.frequency, 0.4, time);
      }else{
        let now = Tone.now();
        let note = data.tone;

        let instrument = data.instrument;
        let player;
        switch (instrument){
          case 'violin':
            file = "./audio/instruments/violin.ogg";
            start_note = 'G4';
            finish_note = 'A#7';
            interval = 0.75;
            player = this.ViolinPlayer;
            break;
          case 'electric_piano':
            file = "./audio/instruments/electric_piano.ogg";
            start_note = 'C2';
            finish_note = 'B7';
            interval = 1;
            player = this.PianoPlayer;
            break;
          case 'acustic_guitar':
            file = "./audio/instruments/acustic_guitar.ogg";
            start_note = 'C2';
            finish_note = 'B6';
            interval = 1.2;
            player = this.GuitarPlayer;
            break;
          case 'bass':
            file = "./audio/instruments/bass.ogg";
            start_note = 'C2';
            finish_note = 'B4';
            interval = 1.2;
            player = this.BassPlayer;
            break;
          case 'trombone':
            file = "./audio/instruments/trombone.ogg";
            start_note = 'E3';
            finish_note = 'G6';
            interval = 1;
            player = this.TrombonePlayer;
            break;
        }
        start_note_index = notes.indexOf(start_note);
        finish_note_index = notes.indexOf(finish_note);

        console.log("Note: ", note);
        if(mapping_notes_to_numbers[note]>=start_note_index &&
            mapping_notes_to_numbers[note]<=finish_note_index ){
          player.start(now, interval*(mapping_notes_to_numbers[note] - start_note_index));
          player.stop(now + interval);
        }else{
          console.log("NOT FOUND");
        }
      }
      console.log("COlor: ", data.color);
      document.body.style.backgroundColor = data.color;
    }, sequence, 0.5);
    this.seq.loop = false;
    this.tone_trasport.start();
    this.seq.start();
  }

  onChangeSelecteTypeSound(event){
    this.setState({selectedSound:event.target.value});
  }

  //\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

  render() {
    let renderDrawButton = null;
    if(this.state.sequence){
      renderDrawButton = this.renderDrawButton();
    }

    let renderPlayToneButton = null;
    if(this.state.sequence){
      renderPlayToneButton = this.renderPlayToneButton();
    }

    let dataDraw = null;
    if(this.state.drawedData){
      dataDraw = this._resultDraw();
    }

    return(
      <div className="pure-g drawed-data">
        {renderDrawButton}
        {renderPlayToneButton}
        <section className="pure-u-24-24" style={ {boxSizing: "border-box"}}>
          {dataDraw}
        </section>
      </div>
    )
  }

  renderDrawButton(){
    if(this.sequence === null || this.state.drawedData){
      return null
    }
    let btnAlignClass = "animated infinite pulse";
    let btnString = "Visualizar";
    return (
      <aside className="pure-u-24-24 action-align">
        <button className={"pure-button button-warning " + btnAlignClass}
              onClick={this._onClickDrawButton}>{btnString}</button>
      </aside>
    );
  }

  renderPlayToneButton(){
    if(this.sequence === null || !this.state.drawedData){
      return null
    }
    let btnAlignClass = "animated infinite pulse";
    let btnString = <i className="icono-play"/>;
    let selectorSound = null;
    if(this.state.runTones){
      btnString =  <i className="icono-stop"/>;
    }else{
      selectorSound = (<select id="type_sound" className="pure-input-1-2" onChange={this.onChangeSelecteTypeSound} value={this.state.selectedSound}>
            <option value="instrument">Instrumento</option>
            <option value="frequency">Frecuencia</option>
        </select>);
    }
    return (
      <aside className="pure-u-24-24 action-align">
        {selectorSound}
        <button className={"pure-button button-warning " + btnAlignClass}
              onClick={this._onClickRunTones}>{btnString}</button>
      </aside>
    );
  }

  _resultDraw(){
    if(!this.state.drawedDataElement){
      return null;
    }
    return (
        <article className="pure-u-24-24" >
          {this.state.drawedDataElement}
        </article>
    );
  }

  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps) {
      this.setState({
        sequence: nextProps.sequence,
        drawedData: false,
        runTones: false
      });
    }
  }
}

export default SquenceRepresentation;
