import React ,{ Component } from 'react'

class App extends Component {
  state = {
    tHour:17,
    tMinute:0,
    tSecond:0,
    sHour:0,
    sMinute:0,
    sSecond:0
  }
  componentDidMount(){
    let {tHour,tMinute,tSecond} = this.state
    let tSeconds = tHour*3600 + tMinute*60 + tSecond
    let time = ()=>{
      let date = new Date()
      let nowSeconds = date.getHours()*3600 + date.getMinutes()*60 + date.getSeconds()
      let sSeconds = tSeconds - nowSeconds
      let sHour = Math.floor(sSeconds/3600)
      let sMinute = Math.floor(sSeconds%3600/60)
      let sSecond = Math.floor(sSeconds%60)
      this.setState({
        sHour: sHour,
        sMinute: sMinute,
        sSecond: sSecond
      })
    }
    time()
    setInterval(time,500)
  }
  render(){
    return(
      <div>
        <span>
          {this.state.sHour < 10 ? `0${this.state.sHour}` : this.state.sHour}
        </span>:
        <span>
          {this.state.sMinute < 10 ? `0${this.state.sMinute}` : this.state.sMinute}
        </span>:
        <span>
          {this.state.sSecond < 10 ? `0${this.state.sSecond}` : this.state.sSecond}
        </span>
      </div>
    )
  }
}
export default App
