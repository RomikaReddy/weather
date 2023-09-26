
const db=require('../../Entity')
const cities=db.location;
const sendDataToServer = async (req,res) => {

  try {
    const data=req.body.cityName;
    console.log("data",data);
    if(data!="")
    {
      const newCity = await cities.create({city: data });
      res.send({message:"Data Inserted"})
      console.log('City inserted:', newCity);
    }
    else{
      res.send({message:"City should not be empty"})
      console.log('city not inserted');
    }
     
     
    
  } catch (error) {
    console.error('Error inserting city:', error);
    res.send({message:"Error occured while inserting city"})
  }
}
const getdata=async(req,res)=>
{
  console.log("getdata");
  try{

    const places=await cities.findAll();
    console.log(places);
    res.send(places);
  }
  catch{
    console.log("error in fetching places");
  }
}
const deleteRecords = async (req, res) => {
  try {
    const { recordIds } = req.body;
    console.log("hii, recordIds");
    await cities.destroy({
      where: {
        id: recordIds,
      },
    });
    res.json({ message: 'Records deleted successfully' });
  } catch (error) {
    console.error("Error deleting records", error);
    res.status(500).json({ error: 'An error occurred while deleting records' });
  }
};
module.exports = {
  sendDataToServer,getdata,deleteRecords
};
