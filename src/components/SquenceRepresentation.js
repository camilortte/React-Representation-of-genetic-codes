import React, { Component } from 'react';
// import './global/css/CalcORF.css';
import  SequenceToneConversion from './SequenceToneConversion';
import './global/css/SequenceToneCOnversion.css';
import InputRange from 'react-input-range';
import Tone from 'tone';


class SquenceRepresentation extends Component {

  constructor(props){
    super(props);
    this.mapping_tones = {
      'A': {
         tone: 'C4',
        color: 'red'
      },
      'G': {
        tone: 'E4',
        color: 'green'
      },
      'C': {
        tone: 'G4',
        color: 'blue'
      },
      'T': {
        tone: 'B4',
        color: 'black'
      },
    };
    this.state = {
      sequence: props.sequence,
      codeElement: 10,
      synth: new Tone.Synth().toMaster()
    };

    this.toneTesting();

    this._onClickDrawButton = this._onClickDrawButton.bind(this);
  }


  toneTesting(){

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

    var sine = new Tone.Oscillator(440, "sine").toMaster();
    //start the oscillator at 0

    let loop = new Tone.Loop(function(time){
      sine.start(time);
      sine.stop(time + 0.5);
    }, 2);
    //loop.start(0);
    //Tone.Transport.start();
  }

  _onClickDrawButton(){

  }

  //\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

  render() {
    let renderDrawButton = null;
    if(this.state.sequence){
      renderDrawButton = this.renderDrawButton();
    }

    let dataDraw = null;
    if(this.state.sequence){
      dataDraw = this._resultDraw();
    }

    return(
      <div className="pure-g">
        {renderDrawButton}
        <section className="pure-u-24-24" style={ {boxSizing: "border-box"}}>
          {dataDraw}
        </section>
      </div>
    )
  }

  renderDrawButton(){
    if(this.sequence === null){
      return null
    }
    let btnAlignClass = "animated infinite pulse";
    let btnString = "Visualizar";
    return (
      <aside className="pure-u-24-24 action-align">
        <button className={"pure-button button-warning " + btnAlignClass}
              onClick={this._onClickDrawButton}>{btnString}</button>
        <InputRange
          maxValue={100}
          minValue={10}
          value={this.state.codeElement}
          onChange={value => this.setState({ codeElement: value })} />
      </aside>


    )
  }

  _resultDraw(){
    let dataRender = [];
    const sequence = this.state.sequence;
    let MAX_LINE = this.state.codeElement;

    for(let i=0; i<sequence.length;i++){
      let style = {
        width: 100/MAX_LINE + "%",
        backgroundColor: this.mapping_tones[sequence[i]].color
      };

      let element = (
          <div className={"frame-block"} key={sequence[i]+'_'+i} style={style}>{sequence[i]}</div>
      );
      dataRender.push(element);

      this.state.synth.triggerAttackRelease(this.mapping_tones[sequence[i]].tone, 0.4, 1);


    }

    return (
        <article className="pure-u-24-24" >
          {dataRender}
        </article>
    );
  }

  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps) {
      this.setState({
        sequence: nextProps.sequence
      });
    }
  }
}

export default SquenceRepresentation;
