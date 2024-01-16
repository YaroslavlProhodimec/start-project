import React from 'react';
import styles from './styles.module.scss'
import {motion, useMotionValue, useTransform} from "framer-motion";
import {TypeAnimation} from "react-type-animation";
import {Link} from 'react-router-dom';
import image from "../../../shared/assets/img/scare.png";
import im from "../../../assets/images/favicon.svg";
import {colors} from "../config";
import { PostType } from "../../../entities/post/model/type";
import { fadeIn } from "../../../shared/utils";
import { Button } from "../../../shared/ui/button";

type ServiceProps = {
    post: PostType;
};
const Service: React.FC<ServiceProps> = ({post}) => {
    document.title = "Harmony Oasis Center Clinic - Медицинский Центр Оазис Гармонии";

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);



    return (

        <div className={styles.cardContainer}>
            <motion.div
                style={{x, y, rotateX, rotateY, z: 100}}
                drag
                dragElastic={0.18}
                dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
                whileTap={{cursor: 'grabbing'}}
                className={styles.card}
            >
                <motion.div variants={fadeIn('right', 0.4)} initial='hidden' whileInView={'show'}
                            viewport={{once: false, amount: 0.7}} className={styles.containerSpan}>
                    <span className={styles.span}>Пошевели 😀 </span>
                    <TypeAnimation style={{ color: '#ff0000'}} sequence={['меня', 2000,
                        '', 2000
                    ]} speed={50}/>

                </motion.div>
                <h1 className={styles.cardTitle}
                >{post.title}</h1>

                <p className={styles.cardSubtitle}

                >
                    {post.description}
                </p>

                <div className={styles.priceWrapper}
                >
                    <Link to={'/'}> <Button
                        className="btn btn-outline-danger
                         m-lg-1
                         "
                    >
                        To back
                    </Button></Link>
                    <div className={styles.price}

                    >{post.price}
                    </div>
                </div>
                <ul className={styles.colors}
                >
                    {colors.map((color, index) => {
                        return (
                            <div
                                key={index}
                                style={{backgroundColor: color.value}}
                                className={styles.color}

                            ></div>
                        );
                    })}
                </ul>
                <motion.div
                    style={{x, y, rotateX, rotateY, z: 100000}}
                    className={styles.cardImage}

                >
                    <img width={300}  className={styles.img} src={image} draggable='false' alt=""/>
                    <img width={300}  className={styles.img} src={im} draggable='false' alt=""/>

                </motion.div>
            </motion.div>
        </div>

    );


}
export {Service}
