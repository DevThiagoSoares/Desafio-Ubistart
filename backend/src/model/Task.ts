import { Document, Schema, model } from 'mongoose';


export interface ITask extends Document {
    title: string;
    description: string;
}


const TaskSchema = new Schema<ITask>({
    title: {
        type: String,
        required: true,
        lowercase: true
    },
    description: { 
        type: String,
        required: true,
        lowercase: true
    }

});


export const Task = model<ITask>("Task", TaskSchema);