/**
 * Copyright (c) 2022, WSO2 Inc. (http://www.wso2.com) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { OrganizationInterface } from "../models";

export class OrganizationManagementConstants {
    /**
     * Set of keys used to enable/disable features.
     * @constant
     * @type {Map<string, string>}
     * @default
     */
    public static readonly FEATURE_DICTIONARY: Map<string, string> = new Map<string, string>()
        .set("ORGANIZATION_CREATE", "organizations.create")
        .set("ORGANIZATION_UPDATE", "organizations.update")
        .set("ORGANIZATION_DELETE", "organizations.delete")
        .set("ORGANIZATION_READ", "organizations.read");

    /**
     * Root organization object.
     *
     * @constant
     * @type {OrganizationInterface}
     * @default
     */
    public static readonly ROOT_ORGANIZATION: OrganizationInterface = {
        id: "ROOT",
        name: "Root Organization",
        ref: ""
    };
}

export class OrganizationRoleManagementConstants {
    /**
     * Set of keys used to enable/disable features.
     * @constant
     * @type {Map<string, string>}
     * @default
     */
    public static readonly FEATURE_DICTIONARY: Map<string, string> = new Map<string, string>()
        .set("ORGANIZATION_ROLE_CREATE", "organization-roles.create")
        .set("ORGANIZATION_ROLE_UPDATE", "organization-roles.update")
        .set("ORGANIZATION_ROLE_DELETE", "organization-roles.delete")
        .set("ORGANIZATION_ROLE_READ", "organization-roles.read");

}

export enum ORGANIZATION_TYPE {
    STRUCTURAL = "STRUCTURAL",
    TENANT = "TENANT"
}
