const moongoose=require('mongoose');

const PlacesSchema= new moongoose.Schema({
    name:{type:String},
    location: {
    type: { type: String, default: 'Point' },coordinates: [Number]},
    address: {
        locality: { type: String },
        city: { type: String },
        district: { type: String },
        country: { type: String }
      }
      
});

PlacesSchema.index({ location: '2dsphere' });

module.exports=moongoose.model('places',PlacesSchema);