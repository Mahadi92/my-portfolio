import React from 'react';
import './ProjectDetails.css';
import greenCity from '../../images/green-city.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ProjectDetailModal from '../ProjectDetailModal/ProjectDetailModal';

const ProjectDetails = ({ project }) => {

    const { id, modalId, projectName, projectType, liveLink, gitHub, projectDescription, technologies, details } = project

    // const technologies = project.technologies;

    return (
        <div className="row pb-5 pt-3 project mb-5">
            <div className="col-md-6 px-5 project-img">
                <h2 className="color-primary mb-4 font-secondary color-secondary">Project {id}</h2>
                <img src={greenCity} alt="" />
                <div className="mt-4">
                    <a href={liveLink} target="_blank" className="p-2 me-4 btn-custom-secondary"> <FontAwesomeIcon icon={faGlobe} /> Live Site</a>

                    <a href={gitHub} target="_blank" className="p-2 btn-custom-secondary"> <FontAwesomeIcon icon={faGithub} /> Code</a>
                </div>
            </div>

            <div className="col-md-6 pe-5 pt-5 project-description">
                <h1 className="color-primary p-0 m-0">{projectName} </h1>
                <h3 className="color-primary p-0 m-0"> ( {projectType} )</h3>
                <p className="pt-3">{projectDescription}</p>

                <div className="technologies w-100">
                    {
                        technologies.map(technologie => <span className="p-2 me-2">{technologie}</span>)
                    }
                </div>

                <button className="mt-4 btn-custom-secondary py-2 px-5" data-bs-toggle="modal" data-bs-target={`#${modalId}`}> <FontAwesomeIcon icon={faInfoCircle} /> View Details</button>

            </div>



            {/* Modal */}
            <ProjectDetailModal project={project} key={id}></ProjectDetailModal>



        </div>

    );
};

export default ProjectDetails;