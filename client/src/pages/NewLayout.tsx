import React, { useReducer } from 'react'
import styled from 'styled-components'

import Map from '../components/NewLayout/Map'
import SearchBox from '../components/NewLayout/SearchBox'
import GroupsList from '../components/NewLayout/GroupsList'
import InfoBox from '../components/NewLayout/InfoBox'

import '../styles/new-layout.css'

const NewLayout = () => {
  const [open, toggleSidebar] = useReducer((x) => !x, true)
  return (
    <LayoutStyles className="new-layout" sidebar={open}>
      <div className="side-bar">
        <div className="panel">
          <div onClick={toggleSidebar} className="toggle">
            <div>{open ? '<' : '>'}</div>
          </div>
          <div className="nav">
            <div>LOG IN</div>
            <div>HELP</div>
          </div>
          <div
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}
          >
            <h3>
              Find local <br /> mutal aid groups
            </h3>
          </div>
        </div>
        <SearchBox />
        <GroupsList />
      </div>
      <Map />
    </LayoutStyles>
  )
}

const LayoutStyles = styled.div<{ sidebar: boolean }>`
  display: grid;
  grid: 100% / ${(p) => (p.sidebar ? '30rem' : '1rem')} 1fr;
  height: 100vh;
  transition: grid 0.3s;

  .panel {
    padding: 1rem;
  }

  .nav {
    padding: 1rem 0;
    display: flex;
    flex-direction: row;
    font-weight: bold;
    flex-basis: center;
    color: rgba(0, 0, 0, 0.6);

    div {
      border-radius: 20px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      padding: 0 1rem;
      margin: 0 0.2rem;
    } 
  }

  .toggle {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: -1.2rem;
    top: 50%;
    width: 1.2rem;
    height: 4rem;
    background-color: white;
    border-radius: 0 10px 10px 0;
    transition: transform 0.3s;
    cursor: pointer;
    border-left: 1px solid rgba(0, 0, 0, 0.06);
    /* transform: translateX(${(p) => (p.sidebar ? '0rem' : '4rem')}); */
    
    div {
      height: 1rem;
    }
  }

  .side-bar {
    display: grid;
    grid: 0fr 0fr 0fr 1fr / 1fr;
    width: 30rem;
    transform: translateX(${(p) => (p.sidebar ? '0rem' : '-29rem')});
    height: 100%;
    box-shadow: 0px 0px 22px -9px #959595;
    background-color: white;
    position: relative;
    z-index: 2;
    display: flex;
    flex-flow: column;
    transition: all 0.3s;

    h3 {
      padding: 1rem;
      font-size: 2.2rem;
      font-weight: 800;
    }
  }
`

const SideBarStyles = styled.div``

export default NewLayout
