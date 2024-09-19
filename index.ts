import { NativeModules, Platform } from "react-native";

const { AppleAdsAttribution: RNAppleAdsAttribution } = NativeModules;

class AppleAdsAttribution {
  getAdServicesAttributionToken(): null | Promise<{
    attribution: boolean;
    orgId: number;
    campaignId: number;
    conversionType: string;
    clickDate?: string; // "2020-04-08T17:17Z",
    adGroupId: number;
    countryOrRegion: string;
    keywordId: number;
    adId: number;
  }> {
    if (Platform.OS !== "ios") {
      return null;
    }
    return RNAppleAdsAttribution.getAdServicesAttributionToken();
  }

  getAdServicesAttributionData(): null | Promise<string> {
    if (Platform.OS !== "ios") {
      return null;
    }
    return RNAppleAdsAttribution.getAdServicesAttributionData();
  }
}

const AppleAdsAttributionInstance = new AppleAdsAttribution();

export default AppleAdsAttributionInstance;
