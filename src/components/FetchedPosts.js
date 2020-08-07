import React from 'react'
import Post from './Post'
import { fetchPosts } from '../redux/actions'
import {useDispatch, useSelector} from 'react-redux'
import Loader from './Loader'

export default () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchedPosts)
    const loading = useSelector(state=>state.app.loading)

    if(loading){
        return <Loader/>
    }

    if(!posts.length){
        return <button
         className="btn btn-primary"
         onClick={()=>dispatch(fetchPosts())}
         >Загрузить</button>
    }

    return posts.map(post=><Post post={post} id={post} key={post.id}/>)
}
