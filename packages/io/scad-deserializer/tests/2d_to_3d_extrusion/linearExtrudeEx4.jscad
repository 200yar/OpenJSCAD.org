function main(){


return CAG.circle({center: [0,0], radius: 1, resolution: 5}).translate([2,0,0]).extrude({offset: [0, 0, 10], twistangle: 500,twiststeps: 41}).translate([0,0,-5]);
};