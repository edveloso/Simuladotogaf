const questions = [
    {
        "QUESTION_NUMBER": "26",
        "QUESTION_TEXT": "What is the purpose of creating a client object when working with Azure resources?",
        "POSSIBLE_ANSWERS": [
            "A. To establish a connection to Azure SQL Database.",
            "B. To interact with resources like storage accounts, containers, and blobs.",
            "C. To monitor Azure resources in real-time.",
            "D. To configure Azure AD policies.",
            "E. To generate automated reports for Azure."
        ],
        "EXPLANATION_TEXT": "Explanation: A client object in the Azure SDK is created to interact with specific resources like storage accounts, containers, and blobs. It allows applications to perform operations on these resources programmatically.",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "26",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "27",
        "QUESTION_TEXT": "Which class allows interaction with resources at the storage account level?",
        "POSSIBLE_ANSWERS": [
            "A. BlobClient",
            "B. BlobContainerClient",
            "C. BlobServiceClient",
            "D. BlobUriBuilder",
            "E. BlobClientOptions"
        ],
        "EXPLANATION_TEXT": "Explanation: The BlobServiceClient class is used to interact with resources at the storage account level, including managing containers and account properties.",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "27",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "28",
        "QUESTION_TEXT": "What method is used to create a BlobContainerClient object from a BlobServiceClient?",
        "POSSIBLE_ANSWERS": [
            "A. GetBlobServiceClient",
            "B. GetBlobContainerClient",
            "C. GetBlobClient",
            "D. CreateBlobContainerClient",
            "E. InitializeBlobContainerClient"
        ],
        "EXPLANATION_TEXT": "Explanation: The GetBlobContainerClient method is used to create a BlobContainerClient object from an existing BlobServiceClient, enabling interactions with a specific container.",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "28",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "29",
        "QUESTION_TEXT": "What authentication method is used in the code examples for creating client objects?",
        "POSSIBLE_ANSWERS": [
            "A. Shared Key Authentication",
            "B. OAuth 2.0",
            "C. DefaultAzureCredential",
            "D. SAS Tokens",
            "E. JWT Tokens"
        ],
        "EXPLANATION_TEXT": "Explanation: DefaultAzureCredential is used in the examples to authenticate to Azure. It obtains an access token for authorization and persists the credential throughout the client's lifetime.",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "29",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "30",
        "QUESTION_TEXT": "Which Azure RBAC role must be assigned to the security principal requesting a token for blob data access?",
        "POSSIBLE_ANSWERS": [
            "A. Storage Account Contributor",
            "B. Blob Data Reader",
            "C. Resource Group Contributor",
            "D. Azure Administrator",
            "E. DevOps Contributor"
        ],
        "EXPLANATION_TEXT": "Explanation: The security principal requesting the token must be assigned a role such as Blob Data Reader to grant appropriate access to blob data.",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "30",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "31",
        "QUESTION_TEXT": "Which method allows interaction with a specific blob within a container?",
        "POSSIBLE_ANSWERS": [
            "A. GetBlobServiceClient",
            "B. GetBlobContainerClient",
            "C. GetBlobClient",
            "D. InitializeBlobClient",
            "E. CreateBlobClient"
        ],
        "EXPLANATION_TEXT": "Explanation: The GetBlobClient method is used to interact with a specific blob resource within a container.",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "31",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "32",
        "QUESTION_TEXT": "What is required in the URI when creating a BlobContainerClient directly?",
        "POSSIBLE_ANSWERS": [
            "A. The container name appended to the account URI.",
            "B. Only the account URI.",
            "C. The blob name appended to the account URI.",
            "D. A SAS token in the URI.",
            "E. Only the region in the URI."
        ],
        "EXPLANATION_TEXT": "Explanation: When creating a BlobContainerClient directly, the URI must include the container name appended to the account URI to specify the container resource.",
        "CORRECT_ANSWER": "A",
        "JSONINDEX": "32",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "33",
        "QUESTION_TEXT": "What does the BlobClient class allow you to do?",
        "POSSIBLE_ANSWERS": [
            "A. Manage storage account properties.",
            "B. Interact with a specific blob resource.",
            "C. List all containers in a storage account.",
            "D. Modify Azure RBAC roles.",
            "E. Create new storage accounts."
        ],
        "EXPLANATION_TEXT": "Explanation: The BlobClient class allows interactions with a specific blob resource, including operations like reading, writing, or deleting the blob.",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "33",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "34",
        "QUESTION_TEXT": "Which parameter is required when instantiating a BlobServiceClient object?",
        "POSSIBLE_ANSWERS": [
            "A. Storage Account Key",
            "B. URI of the storage account endpoint",
            "C. Name of the blob",
            "D. Container name",
            "E. Azure Region"
        ],
        "EXPLANATION_TEXT": "Explanation: A BlobServiceClient object is instantiated by passing the URI of the storage account endpoint, which specifies the resource to connect to.",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "34",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "35",
        "QUESTION_TEXT": "What method is used to obtain a BlobClient object from a container client?",
        "POSSIBLE_ANSWERS": [
            "A. GetBlobServiceClient",
            "B. GetBlobContainerClient",
            "C. GetBlobClient",
            "D. CreateBlobClient",
            "E. ListBlobClients"
        ],
        "EXPLANATION_TEXT": "Explanation: The GetBlobClient method is used to obtain a BlobClient object from a container client, enabling interaction with a specific blob resource.",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "35",
        "Probability": 1
    }
];
