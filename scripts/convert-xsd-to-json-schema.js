"use strict";

const path = require("path");
const fs = require("fs");

const x2j = require("jgexml/xml2json");
const xsd = require("jgexml/xsd2json");

const jsonSchema = require("json-schema");

const outDir = require("./out-dir");

const xml = x2j.xml2json(fs.readFileSync(path.join(outDir, "ffprobe.xsd"), "utf8"), {
  attributePrefix: "@",
  valueProperty: false,
  coerceTypes: false
});

const json = xsd.getJsonSchema(xml, "ffprobe", "", false, "xs:");

json.$id = json.id;
delete json.id;

const jsonSchema1 = Object.assign({
  "title": "ffprobe",
  "$schema": "http://json-schema.org/schema#",
  "$id": "ffprobe",
}, json.definitions.ffprobeType);

delete json.definitions.ffprobeType;
jsonSchema1.definitions = json.definitions;

// jsonSchema.mustBeValid(jsonSchema.validate(json));

fs.writeFileSync(path.join(outDir, "ffprobe.json"), JSON.stringify(jsonSchema1, null, 2));
