import mongoose from 'mongoose';

const database = async () => {
  try {
    console.log("Melakukan koneksi ke MongoDB");

    const response = await mongoose.connect("mongodb://127.0.0.1:27017/Meiii?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.8");

    console.log(
        `Koneksi ke MongoDB berhasil pada host: ${response.connection.host}`
    );
    } catch (error) {
        console.log("Koneksi ke MongoDB gagal");
        process.exit(1);
    }
};

export default database;