# Create a minimal Adobe Experience Manager project

Type the following in a terminal or in a command prompt:

```shell
mvn archetype:generate \
-DarchetypeGroupId=com.adobe.granite.archetypes \
-DarchetypeArtifactId=aem-project-archetype \
-DarchetypeVersion=10 \
-DarchetypeRepository=https://repo.adobe.com/nexus/content/groups/public/ \
-DgroupId=com.perficient.adobe \
-DartifactId=digital \
-Dversion=1.0-SNAPSHOT \
-Dpackage=com.perficient.adobe.digital \
-DappsFolderName=digital \
-DartifactName="Perficient Digital" \
-DcomponentGroupName="Perficient Digital Components" \
-DcontentFolderName=digital \
-DcssId=digital \
-DpackageGroup="Perficient Digital Content Package" \
-DsiteName="Perficient Digital Site" -batch-mode
```

This will create an AEM Project based on the AEM Project Archetype.  The Project will be named "Perficient Digital".  The Java classes will be within the "com.perficient.adobe.digital.core" package.  The content and application content packages will be installed within a folder named "digital".

To retrieve the source for this project, run the following command in a terminal or at a command prompt:

```shell
git clone -b Minimal-AEM-Project --single-branch https://github.com/PRFTAdobe/AEMTraining.git Minimal-AEM-Project
```
