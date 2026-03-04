import { useRef } from 'react';
import Button from '../general-purpose/Button';
import styles from './FileUploader.module.scss';

interface FileUploaderProps {
  className?: string;
  text?: string | null;
  onFileSelectSuccess: (arg0: File) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  onFileSelectSuccess,
  className,
  text,
}) => {
  const fileInput = useRef<HTMLInputElement>(null);
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files && onFileSelectSuccess(e.target.files[0]);
  };
  const handleClick = () => {
    fileInput.current && fileInput.current.click();
  };
  return (
    <div className={`${styles.fileUploader}${className ? ` ${className}` : ''}`}>
      <input
        style={{ display: 'none' }}
        ref={fileInput}
        type='file'
        onChange={e => handleFileInput(e)}
      />
      <Button
        handleClick={handleClick}
        text={text || 'Pick a file'}
      />
    </div>
  );
};

export default FileUploader;
