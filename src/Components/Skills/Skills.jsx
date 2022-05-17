import React,{useState, useEffect} from 'react'
import "./Skills.css"
import Aos from "aos"

const Skills = () => {
    useEffect(() => {
        Aos.init({duration : 2000})
    },[])
  return (
    <div id="Skills">
        <div className='SkillsTop'>
            <div className='Text-5 Highlighted'>What I know</div>
            <div className='Text-4'>My Skills</div>
        </div>
        <div className='SkillsDown'>
            <div className='SkillList'>
                <div className='SkillTop'>
                    <span>React JS</span>
                    <span>80%</span>
                </div>
                <div className='Indicator'>
                    <div className='Filled' style={{width: "80%"}}></div>
                    <div className='Empty' style={{width: "20%"}}></div>
                </div>
            </div>
            <div className='SkillList'>
                <div className='SkillTop'>
                    <span>HTML5</span>
                    <span>80%</span>
                </div>
                <div className='Indicator'>
                    <div className='Filled' style={{width: "80%"}}></div>
                    <div className='Empty' style={{width: "20%"}}></div>
                </div>
            </div>
            <div className='SkillList'>
                <div className='SkillTop'>
                    <span>CSS3</span>
                    <span>75%</span>
                </div>
                <div className='Indicator'>
                    <div className='Filled' style={{width: "75%"}}></div>
                    <div className='Empty' style={{width: "25%"}}></div>
                </div>
            </div>
            <div className='SkillList'>
                <div className='SkillTop'>
                    <span>Node JS</span>
                    <span>60%</span>
                </div>
                <div className='Indicator'>
                    <div className='Filled' style={{width: "60%"}}></div>
                    <div className='Empty' style={{width: "40%"}}></div>
                </div>
            </div>
            <div className='SkillList'>
                <div className='SkillTop'>
                    <span>MongoDB</span>
                    <span>60%</span>
                </div>
                <div className='Indicator'>
                    <div className='Filled' style={{width: "60%"}}></div>
                    <div className='Empty' style={{width: "40%"}}></div>
                </div>
            </div>
            <div className='SkillList'>
                <div className='SkillTop'>
                    <span>Git</span>
                    <span>80%</span>
                </div>
                <div className='Indicator'>
                    <div className='Filled' style={{width: "80%"}}></div>
                    <div className='Empty' style={{width: "20%"}}></div>
                </div>
            </div>
            <div className='SkillList'>
                <div className='SkillTop'>
                    <span>C++</span>
                    <span>90%</span>
                </div>
                <div className='Indicator'>
                    <div className='Filled' style={{width: "90%"}}></div>
                    <div className='Empty' style={{width: "10%"}}></div>
                </div>
            </div>
            <div className='SkillList'>
                <div className='SkillTop'>
                    <span>Blockchain</span>
                    <span>30%</span>
                </div>
                <div className='Indicator'>
                    <div className='Filled' style={{width: "30%"}}></div>
                    <div className='Empty' style={{width: "70%"}}></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills