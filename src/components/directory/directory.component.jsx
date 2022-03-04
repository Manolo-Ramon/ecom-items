import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            selctions: [
                {
                    title: 'hats',
                    // imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    imageUrl: 'https://cdn.pixabay.com/photo/2016/05/17/22/16/baby-1399332_960_720.jpg',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    imageUrl: 'https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_960_720.jpg',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    // imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    imageUrl: 'https://cdn.pixabay.com/photo/2017/04/08/16/16/kicks-2213619_960_720.jpg',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    // imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    imageUrl: 'https://cdn.pixabay.com/photo/2015/10/15/21/35/bridge-990100_960_720.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                }, 
                {
                    title: 'mens',
                    // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    imageUrl: 'https://cdn.pixabay.com/photo/2016/03/26/22/13/man-1281562_960_720.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        }
    }

    render() {
        return(
            <div className="directory-menu">
                {
                    this.state.selctions.map(({ title, imageUrl, id, size }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;