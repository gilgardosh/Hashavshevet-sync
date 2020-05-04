import { getMesh, findAndParseConfig } from "@graphql-mesh/runtime";
import { wizCloudAuth } from "./wizCloudAuth";

async function importNewAccount(accountKey) {
  const wizCloudAuthToken = await wizCloudAuth();
  const meshConfig = await findAndParseConfig();
  const { execute } = await getMesh(meshConfig);
  const { data, errors } = await execute(
    `
    mutation getWizcloudData {
        importIndexRecords(
          authorization: "${wizCloudAuthToken}"
          importIndexRecordsBodyInput: {
            myindex: ACC
            insertnew: true
            rows: {
              accountKey: "${wizCloudAuthToken}"
            }
          }
        ) {
          status
          errors {
            err
            index
          }
        }
      }
    `,
    {}
  );
  const accountStatus: object[] = data.importIndexRecords;
  if (errors)
    console.log("ERROR in mesh while attempting to create accounnt: ", errors);
  if (accountStatus["status"] == "OK") {
    console.log(`Account ${accountKey} created`);
    return;
  }
  if (accountStatus["status"] == "errors")
    console.log(
      "ERROR in wizcloud while attempting to create accounnt: ",
      accountStatus["errors"]
    );
  return;
}

export { importNewAccount };
