import { useState, useEffect } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'
import PropTypes from 'prop-types'

function ProjectForm({ btnText, handleSubmit, projectData }){

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then((resp) => resp.json())
        .then((data) => setCategories(data))
        .catch((err => console.log(err)))
    }, [])

    const Submit = (e) => {
        e.preventDefault()
        // console.log(project)
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({...project, [e.target.name]: e.target.value})
    }

    function handleCategory(e) {
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }})
    }

    return (
        <form onSubmit={Submit} className={styles.form}>
            <Input 
                type="text" 
                text="Name Project" 
                name="name" 
                placeholder="Enter project name"
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
            />

            <Input 
                type="number" 
                text="project budget" 
                name="budget" 
                placeholder="Enter total budget"
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
            />

            <Select 
                name="category_id" 
                text="Select category" 
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''}
            />

            <SubmitButton text={btnText}/>
            
        </form>
    )
}

ProjectForm.propTypes = {
    btnText: PropTypes.string,
    handleSubmit: PropTypes.func,
    projectData: PropTypes.any,
}

export default ProjectForm