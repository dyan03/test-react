import React from 'react'
import styles from './styles.css'

function MyCard(props) {
    return (
        <div class="card text" style={{width: 700, height: 200, float: 'left', margin :'10px'}}>
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                    {/* <li class="nav-item">
                        <a class="nav-link" href="#">Active</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li> */}
                <h5 class="card-title">[{props.nameOfTrust}] {props.nameOfFund}</h5>

                </ul>
            </div>
            <div style={{display: 'flex'}}>
            <div class="card-body" >
                <p class={styles.cardList} >Fund Manager {props.nameOfFM}</p>
                <p class={styles.cardList} style={{color: 'red'}} > 목표 금액 {props.target}</p>
                <p class={styles.cardList} > 현재 금액 {props.current}</p>
            </div>
            <div  class="card-body" style={{textAlign: 'right'}} >
                    <a href="#" class="btn btn-primary"  >펀딩</a>
            </div>
            </div>
        </div>
    )

}

export default MyCard