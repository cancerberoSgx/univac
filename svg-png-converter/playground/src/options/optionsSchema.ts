// import { SVG2PNGOptions, PNG2SVGOptions, Format, OutputFormat, Encoding, PotracePosterizeOptions, PotraceTraceOptions, PotraceFillPolicy, PotraceTurnPolicy, IDataURLOptions, PotraceRangeDistributionPolicy, Potrace } from 'svg-png-converter';
// import { BaseOptions } from 'vm';

// // To parse this data:
// //
// //   import { Convert, SVG2PNGOptions, PNG2SVGOptions, BaseOptions, Format, OutputFormat, Encoding, PotracePosterizeOptions, PotraceTraceOptions, Potrace, PotraceRangeDistributionPolicy, PotraceFillPolicy, PotraceTurnPolicy, IDataURLOptions, SVG2PNGOptionsE } from "./file";
// //
// //   const buffer = Convert.toBuffer(json);
// //   const blob = Convert.toBlob(json);
// //   const uint8Array = Convert.toUint8Array(json);
// //   const removeProperties = Convert.toRemoveProperties(json);
// //   const sVG2PNGOptions = Convert.toSVG2PNGOptions(json);
// //   const pNG2SVGOptions = Convert.toPNG2SVGOptions(json);
// //   const baseOptions = Convert.toBaseOptions(json);
// //   const format = Convert.toFormat(json);
// //   const outputFormat = Convert.toOutputFormat(json);
// //   const encoding = Convert.toEncoding(json);
// //   const potracePosterizeOptions = Convert.toPotracePosterizeOptions(json);
// //   const potraceTraceOptions = Convert.toPotraceTraceOptions(json);
// //   const potrace = Convert.toPotrace(json);
// //   const posterizer = Convert.toPosterizer(json);
// //   const potraceRangeDistributionPolicy = Convert.toPotraceRangeDistributionPolicy(json);
// //   const potraceFillPolicy = Convert.toPotraceFillPolicy(json);
// //   const potraceTurnPolicy = Convert.toPotraceTurnPolicy(json);
// //   const iDataURLOptions = Convert.toIDataURLOptions(json);
// //   const sVG2PNGOptionsE = Convert.toSVG2PNGOptionsE(json);
// //
// // These functions will throw an error if the JSON doesn't
// // match the expected interface, even if the JSON is valid.

// // export interface SVG2PNGOptionsE {
// //   /**
// //    * Node.js and CLI only. Prints debug messages.
// //    */
// //   debug?:               boolean;
// //   enableRetinaScaling?: boolean;
// //   /**
// //    * Output image encoding. One of: `base64, dataURL, raw, buffer`. By default: `raw`.
// //    */
// //   encoding?: string[];
// //   /**
// //    * Output format. One of: `png, jpeg`. By default: `png`.
// //    */
// //   format?: OutputFormat;
// //   /**
// //    * Cropping height. Introduced in v1.2.14
// //    */
// //   height?: number;
// //   /**
// //    * CLI only. Print usage information, then exit.
// //    */
// //   help?: boolean;
// //   /**
// //    * SVG code to render as plain text.
// //    *
// //    * For CLi or Node.js, it can also be path or glob file pattern to .svg files, relative to
// //    * current dir.
// //    */
// //   input: any;
// //   /**
// //    * Cropping left offset. Introduced in v1.2.14
// //    */
// //   left?: number;
// //   /**
// //    * Multiplier to scale by
// //    */
// //   multiplier?: number;
// //   /**
// //    * Node.js and CLI only. Folder for output files. If it doesn't exists it will be created.
// //    * If none, output will be written to
// //    * stdout.
// //    */
// //   output?: string;
// //   /**
// //    * Quality level (0..1). Only used for jpeg
// //    */
// //   quality?: number;
// //   /**
// //    * Cropping top offset. Introduced in v1.2.14
// //    */
// //   top?: number;
// //   /**
// //    * Cropping width. Introduced in v1.2.14
// //    */
// //   width?:            number;
// //   withoutShadow?:    boolean;
// //   withoutTransform?: boolean;
// // }

// // /**
// // * Output format. One of: `png, jpeg`. By default: `png`.
// // */
// // export enum OutputFormat {
// //   JPEG = "jpeg",
// //   PNG = "png",
// // }

// // export interface PNG2SVGOptions {
// //   /**
// //    * Node.js and CLI only. Prints debug messages.
// //    */
// //   debug?: boolean;
// //   /**
// //    * CLI only. Print usage information, then exit.
// //    */
// //   help?: boolean;
// //   /**
// //    * PNG/JPEG file content encoded as dataURL.
// //    *
// //    * For CLi and Node.js, it can also be a path or glob file pattern to .png / .jpg files,
// //    * relative to current dir.
// //    */
// //   input: any;
// //   /**
// //    * Disable curve optimization (default false).
// //    */
// //   noCurveOptimization?: boolean;
// //   /**
// //    * Node.js and CLI only. Folder for output files. If it doesn't exists it will be created.
// //    * If none, output will be written to
// //    * stdout.
// //    */
// //   output?: string;
// // }

// // export interface BaseOptions {
// //   /**
// //    * Node.js and CLI only. Prints debug messages.
// //    */
// //   debug?: boolean;
// //   /**
// //    * CLI only. Print usage information, then exit.
// //    */
// //   help?: boolean;
// //   /**
// //    * Node.js and CLI only. Folder for output files. If it doesn't exists it will be created.
// //    * If none, output will be written to
// //    * stdout.
// //    */
// //   output?: string;
// // }

// // export enum Format {
// //   JPEG = "jpeg",
// //   PNG = "png",
// //   SVG = "svg",
// // }

// // export enum Encoding {
// //   Base64 = "base64",
// //   Buffer = "buffer",
// //   DataURL = "dataURL",
// //   Raw = "raw",
// // }

// // /**
// // * - When number of `steps` is greater than 10 - an extra layer could be added to ensure
// // * presence of
// // * darkest/brightest colors if needed to ensure presence of probably-important-at-this-point
// // * details like
// // * shadows or line art.
// // *
// // * - With big number of layers produced image will be looking brighter overall than original
// // * due to math error
// // * at the rendering phase because of how layers are composited.
// // *
// // * - With default configuration `steps`, `threshold` and `rangeDistribution` settings all
// // * set to auto,
// // * resulting in a 4 thresholds/color stops being calculated with Multilevel Thresholding
// // * algorithm mentioned
// // * above. Calculation of 4 thresholds takes 3-5 seconds on average laptop. You may want to
// // * explicitly limit
// // * number of `steps` to 3 to moderately improve processing speed.
// // */
// // export interface PotracePosterizeOptions {
// //   /**
// //    * corner threshold parameter (default 1).
// //    */
// //   alphaMax?: number;
// //   /**
// //    * Background color. Will be ignored when exporting as \<symbol\>. By default is not present
// //    * (`PotraceTurnPolicy.COLOR_TRANSPARENT`)
// //    */
// //   background?: string;
// //   /**
// //    * specifies colors by which side from threshold should be traced (default true).
// //    */
// //   blackOnWhite?: boolean;
// //   /**
// //    * Fill color. Will be ignored when exporting as \<symbol\>. (default:
// //    * `PotraceTurnPolicy.COLOR_AUTO`,
// //    * which means black or white, depending on `blackOnWhite` property)
// //    */
// //   color?: string;
// //   /**
// //    * determines how fill color for each layer should be selected. Possible values are exported
// //    * as constants:
// //    *
// //    * - `FILL_DOMINANT` (`dominant`) - most frequent color in range (used by default),
// //    *
// //    * - `FILL_MEAN` (`mean`) - arithmetic mean (average),
// //    *
// //    * - `FILL_MEDIAN` (`median`) - median color,
// //    *
// //    * - `FILL_SPREAD` (`spread`) - ignores color information of the image and just spreads
// //    * colors equally in range
// //    * 0..threshold (or threshold..255 if `blackOnWhite` is set to `false`),
// //    *
// //    * - `none`
// //    *
// //    * (default: PotraceFillPolicy.FILL_DOMINANT).
// //    */
// //   fillStrategy?: PotraceFillPolicy;
// //   /**
// //    * curve optimization (default true).
// //    */
// //   optCurve?: boolean;
// //   /**
// //    * curve optimization tolerance (default 0.2).
// //    */
// //   optTolerance?: number;
// //   /**
// //    * How to choose thresholds in-between - after equal intervals or automatically balanced.
// //    * (default:
// //    * PotraceRangeDistributionPolicy.RANGES_AUTO). Ignored if `steps` is an array. Possible
// //    * values are:
// //    *
// //    * - `RANGES_AUTO` (`auto`) - Performs automatic thresholding (using [Algorithm For
// //    * Multilevel
// //    * Thresholding][multilevel-thresholding]). Preferable method for already posterized
// //    * sources, but takes
// //    * long time to calculate 5 or more thresholds (exponential time complexity)
// //    * *(used by default)*
// //    *
// //    * - `RANGES_EQUAL`  (`equal`)  - Ignores color information of the image and breaks
// //    * available color space into equal
// //    * chunks
// //    */
// //   rangeDistribution?: PotraceRangeDistributionPolicy;
// //   /**
// //    * Number of samples that needs to be taken (and number of layers in SVG). (default:
// //    * Posterizer.STEPS_AUTO,
// //    * which most likely will result in 3, sometimes 4). Threshold computation for more than 5
// //    * levels may take
// //    * a long time.
// //    *
// //    * Specifies desired number of layers in resulting image. If a number provided - thresholds
// //    * for each layer
// //    * will be automatically calculated according to `rangeDistribution` parameter.
// //    *
// //    * If an array provided it expected to be an array with pre computed thresholds for each
// //    * layer (in range
// //    * 0..255)
// //    *
// //    * (default: `STEPS_AUTO` which will result in `3` or `4`, depending on `threshold` value)
// //    */
// //   steps?: number[] | number;
// //   /**
// //    * - Breaks image into foreground and background (and only foreground being broken into
// //    * desired number of
// //    * layers). Basically when provided it becomes a threshold for last (least opaque) layer and
// //    * then `steps
// //    * *    - 1` intermediate thresholds calculated. If **steps** is an array of thresholds and
// //    * every value from
// //    * the array is lower (or larger if **blackOnWhite** parameter set to `false`) than
// //    * threshold - threshold
// //    * will be added to the array, otherwise just ignored.  Default:
// //    * `PotraceTurnPolicy.THRESHOLD_AUTO`
// //    */
// //   threshold?: number;
// //   /**
// //    * suppress speckles of up to this size (default 2).
// //    */
// //   turdSize?: number;
// //   /**
// //    * how to resolve ambiguities in path decomposition. Possible values are exported as
// //    * constants:
// //    * `TURNPOLICY_BLACK`, `TURNPOLICY_WHITE`, `TURNPOLICY_LEFT`, `TURNPOLICY_RIGHT`,
// //    * `TURNPOLICY_MINORITY`,
// //    * `TURNPOLICY_MAJORITY`. (`black`, `white`, `left`, `right`, `minority`, `majority`)
// //    *
// //    * Refer to [this document](http://potrace.sourceforge.net/potrace.pdf) for more
// //    * information (page 4)  .  (default PotraceTurnPolicy.TURNPOLICY_MINORITY).
// //    */
// //   turnPolicy?: PotraceTurnPolicy;
// // }

// // /**
// // * determines how fill color for each layer should be selected. Possible values are exported
// // * as constants:
// // *
// // * - `FILL_DOMINANT` (`dominant`) - most frequent color in range (used by default),
// // *
// // * - `FILL_MEAN` (`mean`) - arithmetic mean (average),
// // *
// // * - `FILL_MEDIAN` (`median`) - median color,
// // *
// // * - `FILL_SPREAD` (`spread`) - ignores color information of the image and just spreads
// // * colors equally in range
// // * 0..threshold (or threshold..255 if `blackOnWhite` is set to `false`),
// // *
// // * - `none`
// // *
// // * (default: PotraceFillPolicy.FILL_DOMINANT).
// // */
// // export enum PotraceFillPolicy {
// //   Dominant = "dominant",
// //   Mean = "mean",
// //   Median = "median",
// //   None = "none",
// //   Spread = "spread",
// // }

// // /**
// // * How to choose thresholds in-between - after equal intervals or automatically balanced.
// // * (default:
// // * PotraceRangeDistributionPolicy.RANGES_AUTO). Ignored if `steps` is an array. Possible
// // * values are:
// // *
// // * - `RANGES_AUTO` (`auto`) - Performs automatic thresholding (using [Algorithm For
// // * Multilevel
// // * Thresholding][multilevel-thresholding]). Preferable method for already posterized
// // * sources, but takes
// // * long time to calculate 5 or more thresholds (exponential time complexity)
// // * *(used by default)*
// // *
// // * - `RANGES_EQUAL`  (`equal`)  - Ignores color information of the image and breaks
// // * available color space into equal
// // * chunks
// // */
// // export enum PotraceRangeDistributionPolicy {
// //   Auto = "auto",
// //   Equal = "equal",
// // }

// // /**
// // * how to resolve ambiguities in path decomposition. Possible values are exported as
// // * constants:
// // * `TURNPOLICY_BLACK`, `TURNPOLICY_WHITE`, `TURNPOLICY_LEFT`, `TURNPOLICY_RIGHT`,
// // * `TURNPOLICY_MINORITY`,
// // * `TURNPOLICY_MAJORITY`. (`black`, `white`, `left`, `right`, `minority`, `majority`)
// // *
// // * Refer to [this document](http://potrace.sourceforge.net/potrace.pdf) for more
// // * information (page 4)  .  (default PotraceTurnPolicy.TURNPOLICY_MINORITY).
// // */
// // export enum PotraceTurnPolicy {
// //   Black = "black",
// //   Left = "left",
// //   Majority = "majority",
// //   Minority = "minority",
// //   Right = "right",
// //   White = "white",
// // }

// // export interface PotraceTraceOptions {
// //   /**
// //    * corner threshold parameter (default 1).
// //    */
// //   alphaMax?: number;
// //   /**
// //    * Background color. Will be ignored when exporting as \<symbol\>. By default is not present
// //    * (`PotraceTurnPolicy.COLOR_TRANSPARENT`)
// //    */
// //   background?: string;
// //   /**
// //    * specifies colors by which side from threshold should be traced (default true).
// //    */
// //   blackOnWhite?: boolean;
// //   /**
// //    * Fill color. Will be ignored when exporting as \<symbol\>. (default:
// //    * `PotraceTurnPolicy.COLOR_AUTO`,
// //    * which means black or white, depending on `blackOnWhite` property)
// //    */
// //   color?: string;
// //   /**
// //    * curve optimization (default true).
// //    */
// //   optCurve?: boolean;
// //   /**
// //    * curve optimization tolerance (default 0.2).
// //    */
// //   optTolerance?: number;
// //   /**
// //    * threshold below which color is considered black (0..255, default Potrace.THRESHOLD_AUTO).
// //    * Should be a
// //    * number in range 0..255 or `PotraceTurnPolicy.THRESHOLD_AUTO` in which case threshold will
// //    * be selected
// //    * automatically using [Algorithm For Multilevel
// //    * Thresholding][http://www.iis.sinica.edu.tw/page/jise/2001/200109_01.pdf]
// //    */
// //   threshold?: number;
// //   /**
// //    * suppress speckles of up to this size (default 2).
// //    */
// //   turdSize?: number;
// //   /**
// //    * how to resolve ambiguities in path decomposition. Possible values are exported as
// //    * constants:
// //    * `TURNPOLICY_BLACK`, `TURNPOLICY_WHITE`, `TURNPOLICY_LEFT`, `TURNPOLICY_RIGHT`,
// //    * `TURNPOLICY_MINORITY`,
// //    * `TURNPOLICY_MAJORITY`. (`black`, `white`, `left`, `right`, `minority`, `majority`)
// //    *
// //    * Refer to [this document](http://potrace.sourceforge.net/potrace.pdf) for more
// //    * information (page 4)  .  (default PotraceTurnPolicy.TURNPOLICY_MINORITY).
// //    */
// //   turnPolicy?: PotraceTurnPolicy;
// // }

// // export enum PotraceEnum {
// //   Auto = "auto",
// //   Transparent = "transparent",
// // }

// // export interface IDataURLOptions {
// //   enableRetinaScaling?: boolean;
// //   /**
// //    * The format of the output image. Either "jpeg" or "png"
// //    */
// //   format?: string;
// //   /**
// //    * Cropping height. Introduced in v1.2.14
// //    */
// //   height?: number;
// //   /**
// //    * Cropping left offset. Introduced in v1.2.14
// //    */
// //   left?: number;
// //   /**
// //    * Multiplier to scale by
// //    */
// //   multiplier?: number;
// //   /**
// //    * Quality level (0..1). Only used for jpeg
// //    */
// //   quality?: number;
// //   /**
// //    * Cropping top offset. Introduced in v1.2.14
// //    */
// //   top?: number;
// //   /**
// //    * Cropping width. Introduced in v1.2.14
// //    */
// //   width?:            number;
// //   withoutShadow?:    boolean;
// //   withoutTransform?: boolean;
// // }

// // Converts JSON strings to/from your types
// // and asserts the results of JSON.parse at runtime
// export class Convert {
//   public static toBuffer(json: string): any {
//       return cast(JSON.parse(json), "any");
//   }

//   public static bufferToJson(value: any): string {
//       return JSON.stringify(uncast(value, "any"), null, 2);
//   }

//   public static toBlob(json: string): any {
//       return cast(JSON.parse(json), "any");
//   }

//   public static blobToJson(value: any): string {
//       return JSON.stringify(uncast(value, "any"), null, 2);
//   }

//   public static toUint8Array(json: string): any {
//       return cast(JSON.parse(json), "any");
//   }

//   public static uint8ArrayToJson(value: any): string {
//       return JSON.stringify(uncast(value, "any"), null, 2);
//   }

//   public static toRemoveProperties(json: string): any {
//       return cast(JSON.parse(json), "any");
//   }

//   public static removePropertiesToJson(value: any): string {
//       return JSON.stringify(uncast(value, "any"), null, 2);
//   }

//   public static toSVG2PNGOptions(json: string): SVG2PNGOptions {
//       return cast(JSON.parse(json), r("SVG2PNGOptionsE"));
//   }

//   public static sVG2PNGOptionsToJson(value: SVG2PNGOptions): string {
//       return JSON.stringify(uncast(value, r("SVG2PNGOptionsE")), null, 2);
//   }

//   public static toPNG2SVGOptions(json: string): PNG2SVGOptions {
//       return cast(JSON.parse(json), r("PNG2SVGOptions"));
//   }

//   public static pNG2SVGOptionsToJson(value: PNG2SVGOptions): string {
//       return JSON.stringify(uncast(value, r("PNG2SVGOptions")), null, 2);
//   }

//   public static toBaseOptions(json: string): BaseOptions {
//       return cast(JSON.parse(json), r("BaseOptions"));
//   }

//   public static baseOptionsToJson(value: BaseOptions): string {
//       return JSON.stringify(uncast(value, r("BaseOptions")), null, 2);
//   }

//   public static toFormat(json: string): Format {
//       return cast(JSON.parse(json), r("Format"));
//   }

//   public static formatToJson(value: Format): string {
//       return JSON.stringify(uncast(value, r("Format")), null, 2);
//   }

//   public static toOutputFormat(json: string): OutputFormat {
//       return cast(JSON.parse(json), r("OutputFormat"));
//   }

//   public static outputFormatToJson(value: OutputFormat): string {
//       return JSON.stringify(uncast(value, r("OutputFormat")), null, 2);
//   }

//   public static toEncoding(json: string): Encoding {
//       return cast(JSON.parse(json), r("Encoding"));
//   }

//   public static encodingToJson(value: Encoding): string {
//       return JSON.stringify(uncast(value, r("Encoding")), null, 2);
//   }

//   public static toPotracePosterizeOptions(json: string): PotracePosterizeOptions {
//       return cast(JSON.parse(json), r("PotracePosterizeOptions"));
//   }

//   public static potracePosterizeOptionsToJson(value: PotracePosterizeOptions): string {
//       return JSON.stringify(uncast(value, r("PotracePosterizeOptions")), null, 2);
//   }

//   public static toPotraceTraceOptions(json: string): PotraceTraceOptions {
//       return cast(JSON.parse(json), r("PotraceTraceOptions"));
//   }

//   public static potraceTraceOptionsToJson(value: PotraceTraceOptions): string {
//       return JSON.stringify(uncast(value, r("PotraceTraceOptions")), null, 2);
//   }

//   public static toPotrace(json: string): number | Potrace {
//       return cast(JSON.parse(json), u(3.14, r("PotraceEnum")));
//   }

//   public static potraceToJson(value: number | Potrace): string {
//       return JSON.stringify(uncast(value, u(3.14, r("PotraceEnum"))), null, 2);
//   }

//   public static toPosterizer(json: string): number {
//       return cast(JSON.parse(json), 3.14);
//   }

//   public static posterizerToJson(value: number): string {
//       return JSON.stringify(uncast(value, 3.14), null, 2);
//   }

//   public static toPotraceRangeDistributionPolicy(json: string): PotraceRangeDistributionPolicy {
//       return cast(JSON.parse(json), r("PotraceRangeDistributionPolicy"));
//   }

//   public static potraceRangeDistributionPolicyToJson(value: PotraceRangeDistributionPolicy): string {
//       return JSON.stringify(uncast(value, r("PotraceRangeDistributionPolicy")), null, 2);
//   }

//   public static toPotraceFillPolicy(json: string): PotraceFillPolicy {
//       return cast(JSON.parse(json), r("PotraceFillPolicy"));
//   }

//   public static potraceFillPolicyToJson(value: PotraceFillPolicy): string {
//       return JSON.stringify(uncast(value, r("PotraceFillPolicy")), null, 2);
//   }

//   public static toPotraceTurnPolicy(json: string): PotraceTurnPolicy {
//       return cast(JSON.parse(json), r("PotraceTurnPolicy"));
//   }

//   public static potraceTurnPolicyToJson(value: PotraceTurnPolicy): string {
//       return JSON.stringify(uncast(value, r("PotraceTurnPolicy")), null, 2);
//   }

//   public static toIDataURLOptions(json: string): IDataURLOptions {
//       return cast(JSON.parse(json), r("IDataURLOptions"));
//   }

//   public static iDataURLOptionsToJson(value: IDataURLOptions): string {
//       return JSON.stringify(uncast(value, r("IDataURLOptions")), null, 2);
//   }

//   public static toSVG2PNGOptionsE(json: string): SVG2PNGOptions {
//       return cast(JSON.parse(json), r("SVG2PNGOptionsE"));
//   }

//   public static sVG2PNGOptionsEToJson(value: SVG2PNGOptions): string {
//       return JSON.stringify(uncast(value, r("SVG2PNGOptionsE")), null, 2);
//   }
// }

// function invalidValue(typ: any, val: any): never {
//   throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
// }

// function jsonToJSProps(typ: any): any {
//   if (typ.jsonToJS === undefined) {
//       var map: any = {};
//       typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
//       typ.jsonToJS = map;
//   }
//   return typ.jsonToJS;
// }

// function jsToJSONProps(typ: any): any {
//   if (typ.jsToJSON === undefined) {
//       var map: any = {};
//       typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
//       typ.jsToJSON = map;
//   }
//   return typ.jsToJSON;
// }

// function transform(val: any, typ: any, getProps: any): any {
//   function transformPrimitive(typ: string, val: any): any {
//       if (typeof typ === typeof val) return val;
//       return invalidValue(typ, val);
//   }

//   function transformUnion(typs: any[], val: any): any {
//       // val must validate against one typ in typs
//       var l = typs.length;
//       for (var i = 0; i < l; i++) {
//           var typ = typs[i];
//           try {
//               return transform(val, typ, getProps);
//           } catch (_) {}
//       }
//       return invalidValue(typs, val);
//   }

//   function transformEnum(cases: string[], val: any): any {
//       if (cases.indexOf(val) !== -1) return val;
//       return invalidValue(cases, val);
//   }

//   function transformArray(typ: any, val: any): any {
//       // val must be an array with no invalid elements
//       if (!Array.isArray(val)) return invalidValue("array", val);
//       return val.map(el => transform(el, typ, getProps));
//   }

//   function transformDate(typ: any, val: any): any {
//       if (val === null) {
//           return null;
//       }
//       const d = new Date(val);
//       if (isNaN(d.valueOf())) {
//           return invalidValue("Date", val);
//       }
//       return d;
//   }

//   function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
//       if (val === null || typeof val !== "object" || Array.isArray(val)) {
//           return invalidValue("object", val);
//       }
//       var result: any = {};
//       Object.getOwnPropertyNames(props).forEach(key => {
//           const prop = props[key];
//           const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
//           result[prop.key] = transform(v, prop.typ, getProps);
//       });
//       Object.getOwnPropertyNames(val).forEach(key => {
//           if (!Object.prototype.hasOwnProperty.call(props, key)) {
//               result[key] = transform(val[key], additional, getProps);
//           }
//       });
//       return result;
//   }

//   if (typ === "any") return val;
//   if (typ === null) {
//       if (val === null) return val;
//       return invalidValue(typ, val);
//   }
//   if (typ === false) return invalidValue(typ, val);
//   while (typeof typ === "object" && typ.ref !== undefined) {
//       typ = typeMap[typ.ref];
//   }
//   if (Array.isArray(typ)) return transformEnum(typ, val);
//   if (typeof typ === "object") {
//       return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
//           : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
//           : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
//           : invalidValue(typ, val);
//   }
//   // Numbers can be parsed by Date but shouldn't be.
//   if (typ === Date && typeof val !== "number") return transformDate(typ, val);
//   return transformPrimitive(typ, val);
// }

// function cast<T>(val: any, typ: any): T {
//   return transform(val, typ, jsonToJSProps);
// }

// function uncast<T>(val: T, typ: any): any {
//   return transform(val, typ, jsToJSONProps);
// }

// function a(typ: any) {
//   return { arrayItems: typ };
// }

// function u(...typs: any[]) {
//   return { unionMembers: typs };
// }

// function o(props: any[], additional: any) {
//   return { props, additional };
// }

// function m(additional: any) {
//   return { props: [], additional };
// }

// function r(name: string) {
//   return { ref: name };
// }

// const typeMap: any = {
//   "SVG2PNGOptionsE": o([
//       { json: "debug", js: "debug", typ: u(undefined, true) },
//       { json: "enableRetinaScaling", js: "enableRetinaScaling", typ: u(undefined, true) },
//       { json: "encoding", js: "encoding", typ: u(undefined, a("")) },
//       { json: "format", js: "format", typ: u(undefined, r("OutputFormat")) },
//       { json: "height", js: "height", typ: u(undefined, 3.14) },
//       { json: "help", js: "help", typ: u(undefined, true) },
//       { json: "input", js: "input", typ: "any" },
//       { json: "left", js: "left", typ: u(undefined, 3.14) },
//       { json: "multiplier", js: "multiplier", typ: u(undefined, 3.14) },
//       { json: "output", js: "output", typ: u(undefined, "") },
//       { json: "quality", js: "quality", typ: u(undefined, 3.14) },
//       { json: "top", js: "top", typ: u(undefined, 3.14) },
//       { json: "width", js: "width", typ: u(undefined, 3.14) },
//       { json: "withoutShadow", js: "withoutShadow", typ: u(undefined, true) },
//       { json: "withoutTransform", js: "withoutTransform", typ: u(undefined, true) },
//   ], "any"),
//   "PNG2SVGOptions": o([
//       { json: "debug", js: "debug", typ: u(undefined, true) },
//       { json: "help", js: "help", typ: u(undefined, true) },
//       { json: "input", js: "input", typ: "any" },
//       { json: "noCurveOptimization", js: "noCurveOptimization", typ: u(undefined, true) },
//       { json: "output", js: "output", typ: u(undefined, "") },
//   ], "any"),
//   "BaseOptions": o([
//       { json: "debug", js: "debug", typ: u(undefined, true) },
//       { json: "help", js: "help", typ: u(undefined, true) },
//       { json: "output", js: "output", typ: u(undefined, "") },
//   ], "any"),
//   "PotracePosterizeOptions": o([
//       { json: "alphaMax", js: "alphaMax", typ: u(undefined, 3.14) },
//       { json: "background", js: "background", typ: u(undefined, "") },
//       { json: "blackOnWhite", js: "blackOnWhite", typ: u(undefined, true) },
//       { json: "color", js: "color", typ: u(undefined, "") },
//       { json: "fillStrategy", js: "fillStrategy", typ: u(undefined, r("PotraceFillPolicy")) },
//       { json: "optCurve", js: "optCurve", typ: u(undefined, true) },
//       { json: "optTolerance", js: "optTolerance", typ: u(undefined, 3.14) },
//       { json: "rangeDistribution", js: "rangeDistribution", typ: u(undefined, r("PotraceRangeDistributionPolicy")) },
//       { json: "steps", js: "steps", typ: u(undefined, u(a(3.14), 3.14)) },
//       { json: "threshold", js: "threshold", typ: u(undefined, 3.14) },
//       { json: "turdSize", js: "turdSize", typ: u(undefined, 3.14) },
//       { json: "turnPolicy", js: "turnPolicy", typ: u(undefined, r("PotraceTurnPolicy")) },
//   ], "any"),
//   "PotraceTraceOptions": o([
//       { json: "alphaMax", js: "alphaMax", typ: u(undefined, 3.14) },
//       { json: "background", js: "background", typ: u(undefined, "") },
//       { json: "blackOnWhite", js: "blackOnWhite", typ: u(undefined, true) },
//       { json: "color", js: "color", typ: u(undefined, "") },
//       { json: "optCurve", js: "optCurve", typ: u(undefined, true) },
//       { json: "optTolerance", js: "optTolerance", typ: u(undefined, 3.14) },
//       { json: "threshold", js: "threshold", typ: u(undefined, 3.14) },
//       { json: "turdSize", js: "turdSize", typ: u(undefined, 3.14) },
//       { json: "turnPolicy", js: "turnPolicy", typ: u(undefined, r("PotraceTurnPolicy")) },
//   ], "any"),
//   "IDataURLOptions": o([
//       { json: "enableRetinaScaling", js: "enableRetinaScaling", typ: u(undefined, true) },
//       { json: "format", js: "format", typ: u(undefined, "") },
//       { json: "height", js: "height", typ: u(undefined, 3.14) },
//       { json: "left", js: "left", typ: u(undefined, 3.14) },
//       { json: "multiplier", js: "multiplier", typ: u(undefined, 3.14) },
//       { json: "quality", js: "quality", typ: u(undefined, 3.14) },
//       { json: "top", js: "top", typ: u(undefined, 3.14) },
//       { json: "width", js: "width", typ: u(undefined, 3.14) },
//       { json: "withoutShadow", js: "withoutShadow", typ: u(undefined, true) },
//       { json: "withoutTransform", js: "withoutTransform", typ: u(undefined, true) },
//   ], "any"),
//   "OutputFormat": [
//       "jpeg",
//       "png",
//   ],
//   "Format": [
//       "jpeg",
//       "png",
//       "svg",
//   ],
//   "Encoding": [
//       "base64",
//       "buffer",
//       "dataURL",
//       "raw",
//   ],
//   "PotraceFillPolicy": [
//       "dominant",
//       "mean",
//       "median",
//       "none",
//       "spread",
//   ],
//   "PotraceRangeDistributionPolicy": [
//       "auto",
//       "equal",
//   ],
//   "PotraceTurnPolicy": [
//       "black",
//       "left",
//       "majority",
//       "minority",
//       "right",
//       "white",
//   ],
//   "PotraceEnum": [
//       "auto",
//       "transparent",
//   ],
// };
