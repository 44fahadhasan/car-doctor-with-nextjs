const { MongoClient, ServerApiVersion } = require("mongodb");

// let database;

// const connectDB = async () => {
//   // first checking database is connect with mongodb if connectd return database
//   if (database) return database;

//   //  if not connected with data base then execute this code
//   try {
//     // mongodb uri
//     const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_DB_USER}:${process.env.NEXT_PUBLIC_DB_PASS}@cluster0.hlpwrg5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

//     // create a mongodb client
//     const client = new MongoClient(uri, {
//       serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//       },
//     });

//     // create a database in mongodb
//     database = client.db("carDoctor");

//     // checking the monogodb is connected
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//     //

//     return database;

//     //
//   } catch (error) {
//     console.log("mongodbError=>", error);
//   }
// };

// export default connectDB;

//
//  other way
const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_DB_USER}:${process.env.NEXT_PUBLIC_DB_PASS}@cluster0.hlpwrg5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// connect with local mongodb campass
// const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const collections = async () => {
  try {
    // create a database
    const database = client.db("carDoctor");

    // collection one
    const usersCollection = database.collection("users");

    // collection two
    const servicesCollection = database.collection("services");

    // collection three
    const bookingsCollection = database.collection("bookings");

    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );

    // return all collection
    return {
      usersCollection,
      servicesCollection,
      bookingsCollection,
    };

    //
  } catch (error) {
    // error handle
    // console.log("error form mongodb=>", error);
  }
};

export default collections;
