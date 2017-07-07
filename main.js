/**
 * Created by Administrator on 2017/7/6 0006.
 */

module.exports = function () {
    let argv = [];
    try {
        argv = (JSON.parse(process.env.npm_config_argv).original);
    } catch (e) {
        argv = process.argv;
    }


    let arr = argv.filter((res) => {
        if (res.indexOf("-") == 0) {
            return true;
        }
    });

    let obj = {};
    let params = arr.map((res) => {
        let temp = res.split("=");
        temp[0] = temp[0].replace(/-/g, "");
        obj[temp[0]] = temp[1] ? temp[1] : ""
        return {
            [temp[0]]: temp[1] ? temp[1] : ""
        }
    })
    return obj;
}