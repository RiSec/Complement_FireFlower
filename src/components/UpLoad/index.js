import { createRoot } from 'react-dom/client'
import React, { Component } from 'react'
import ReductionWidth from './ChangeWidth'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export default class UpLoad extends React.Component {



    //inputで選択された画像データを受け取る
    constructor(props) {
        super(props)
        this.state = {
            imageData: null
        }

    }


    onFileChange(e) {
        const files = e.target.files
        if (files.length > 0) {
            var file = files[0]
            var reader = new FileReader()
            reader.onload = (e) => {
                this.setState({ imageData: e.target.result })

            };
            reader.readAsDataURL(file)
        } else {
            this.setState({ imageData: null })
        }
    }




    render() {


        //画像
        const imageData = this.state.imageData;

        let preview = ''

        if (imageData != null) {
            const a = imageData;
            preview = (

                <div>

                    <img src={imageData} />

                    {/* <ReductionWidth minTarget={"pic"} minWidth={0} maxTarget={"rubbish"} maxWidth={100} /> */}
                </div>

            )

        }

        return (<>

            <div style={{ backgroundColor: "rgb(13, 13, 96)", height: 1000 }}>

                <input type="file" accept="image/*" onChange={
                    (e) => {
                        this.onFileChange(e)
                    }
                } />
                <div id='pic' style={{ width: 150 }}>{preview}</div>

                {/* <img src='/gomi_kamikuzu.png' style={{ width: 20 }} id="rubbish"></img>
                <center><div id="container" style={{ backgroundColor: "black", width: 500, height: 800 }}></div></center> */}
                <center><div class="go-explostion" id="wrapper"><Link to="/AudioPage" state={{ imageData: imageData }}>決定</Link></div></center>


                {/* <div id='container' style={{ backgroundColor: "pink", height: 1000 }}></div> */}
            </div >
        </>


        )
    }
}
