import Ajv from 'ajv';

export async function validateSchema(jsonSchema: any, data: any) {
  let ajv = new Ajv({ verbose: true, allowMatchingProperties: true });
  let valid;
  try {
    const validate = ajv.compile(jsonSchema);
    valid = validate(data);
    return { isValid: valid, errors: validate.errors };
  } catch (e) {
    console.log(e);
    return { isValid: false, errors: e };
  }
}
