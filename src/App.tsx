import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StackCard from './components/stack_card';

function App() {
    return(
        <>
            <div className="flex">
                <StackCard name="React" />
                <StackCard name="Hugging Face" />
                <StackCard name="ONNX" />
                <StackCard name="OpenAI" />
                <StackCard name="PyTorch" />
                <StackCard name="R" />
            </div>
        </>
    )
}

export default App
