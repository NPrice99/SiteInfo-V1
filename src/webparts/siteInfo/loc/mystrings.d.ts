declare interface ISiteInfoStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'siteInfoStrings' {
  const strings: ISiteInfoStrings;
  export = strings;
}
