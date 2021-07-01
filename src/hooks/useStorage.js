import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (file, cloth, len, DBName) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);


  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef1 = projectFirestore.collection('images');
    const collectionRef2 = projectFirestore.collection(cloth+len);

    
    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      await collectionRef1.add({ url, createdAt, cloth, len });
      await collectionRef2.add({url, createdAt, cloth, len});
      setUrl(url);
    });
  }, [file]);

  return { progress, url, error };
}

export default useStorage;