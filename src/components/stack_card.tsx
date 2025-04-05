import reactLogo from '../assets/react.svg'
import huggingFaceLogo from '../assets/hf-logo.svg'
import onnxLogo from '../assets/onnxai-icon.svg'
import openAILogo from '../assets/openai-svgrepo-com.svg'
import pytorchLogo from '../assets/pytorch-icon.svg'
import RLogo from '../assets/R_logo.svg'
import FastAPILogo from '../assets/FastAPI.svg'


// Map of technology names to their respective logos
const logoMap: { [key: string]: string } = {
    "React": reactLogo,
    "Hugging Face": huggingFaceLogo,
    "ONNX": onnxLogo,
    "OpenAI": openAILogo,
    "PyTorch": pytorchLogo,
    "R": RLogo,
    "FastAPI": FastAPILogo
};

type StackCardProps = {
    name: string;
};

function StackCard({ name }: StackCardProps) {
    const logoSrc = logoMap[name] || '';

    return (
        <div className="flex text-s items-center gap-1 pt-0 pl-1 pr-2 pl-2 shadow-md">
            {logoSrc && (
                <img src={logoSrc} alt={`${name} logo`} className="h-[1em] w-[1em]" />
            )}
            <span className="">{name}</span>
        </div>
    );
}

export default StackCard;
