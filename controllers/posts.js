import express from 'express'
import PostMessage from '../model/PostMessageSchema.js';
export const getPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find();
        res.status(200).json(postMessage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    //added new code
    
}