declare const Skycons: any;

export class SkyCon {

  drawSkyCon(canvas: any, icon: string): void {
    const skyCons = new Skycons({color: "black"});
    skyCons.add(canvas, icon);
    skyCons.play();
  }

}
