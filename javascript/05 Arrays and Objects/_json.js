
        let jsonObj = {
            Network_Name: "Smart Chain",
            ChainID: "56",
            Symbol: "BNB"
        }
        console.log(jsonObj);

        let jsonStr = JSON.stringify(jsonObj);
        console.log(jsonStr);
        // now it is a json

        //replacing values from json
        jsonStr = jsonStr.replace('Smart Chain', 'Polygon');
        jsonStr = jsonStr.replace('56', '137');
        jsonStr = jsonStr.replace('BNB', 'MATIC');
        console.log(jsonStr)


        // helps to convert a valid json string  into object
        jsonStr = JSON.parse(jsonStr);
        console.log(jsonStr)
 