const dateField = "publicationDateISO"; 


const twoDaysAgo = new Date();
twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);


const query = {
  [dateField]: {
    $gte: twoDaysAgo,
    $lte: new Date()
  }
};


db.find(query);