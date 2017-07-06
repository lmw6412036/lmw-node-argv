/**
 * Created by Administrator on 2017/7/6 0006.
 */

module.exports = function (argv) {
    let arr = argv.filter((res) => {
        if (res.indexOf("-") == 0) {
            return true;
        }
    });

    let params=arr.map((res)=>{
        let temp=res.split("=");
        temp[0]=temp[0].replace(/-/g,"");
        return {
            [temp[0]]:temp[1]?temp[1]:""
        }
    })
    return params;
}