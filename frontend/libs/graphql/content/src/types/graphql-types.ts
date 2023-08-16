import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | undefined | null;
export type InputMaybe<T> = T | undefined | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  I18NLocaleCode: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Chapter = {
  __typename?: 'Chapter';
  Name?: Maybe<Scalars['String']['output']>;
  Slug: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  level?: Maybe<LevelEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  subchapters?: Maybe<SubchapterRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ChapterSubchaptersArgs = {
  filters?: InputMaybe<SubchapterFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ChapterEntity = {
  __typename?: 'ChapterEntity';
  attributes?: Maybe<Chapter>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ChapterEntityResponse = {
  __typename?: 'ChapterEntityResponse';
  data?: Maybe<ChapterEntity>;
};

export type ChapterEntityResponseCollection = {
  __typename?: 'ChapterEntityResponseCollection';
  data: Array<ChapterEntity>;
  meta: ResponseCollectionMeta;
};

export type ChapterFiltersInput = {
  Name?: InputMaybe<StringFilterInput>;
  Slug?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ChapterFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  level?: InputMaybe<LevelFiltersInput>;
  not?: InputMaybe<ChapterFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ChapterFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  subchapters?: InputMaybe<SubchapterFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ChapterInput = {
  Name?: InputMaybe<Scalars['String']['input']>;
  Slug?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  subchapters?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ChapterRelationResponseCollection = {
  __typename?: 'ChapterRelationResponseCollection';
  data: Array<ChapterEntity>;
};

export type ComponentContentCallToAction = {
  __typename?: 'ComponentContentCallToAction';
  Label: Scalars['String']['output'];
  NewWindow?: Maybe<Scalars['Boolean']['output']>;
  URL: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type ComponentContentCallToActionFiltersInput = {
  Label?: InputMaybe<StringFilterInput>;
  NewWindow?: InputMaybe<BooleanFilterInput>;
  URL?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentContentCallToActionFiltersInput>>>;
  not?: InputMaybe<ComponentContentCallToActionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContentCallToActionFiltersInput>>>;
};

export type ComponentContentCallToActionInput = {
  Label?: InputMaybe<Scalars['String']['input']>;
  NewWindow?: InputMaybe<Scalars['Boolean']['input']>;
  URL?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentContentContact = {
  __typename?: 'ComponentContentContact';
  Company?: Maybe<Scalars['String']['output']>;
  Email?: Maybe<Scalars['String']['output']>;
  Name: Scalars['String']['output'];
  Position?: Maybe<Scalars['String']['output']>;
  ProfilePicture?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID']['output'];
};

export type ComponentContentContactFiltersInput = {
  Company?: InputMaybe<StringFilterInput>;
  Email?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Position?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentContentContactFiltersInput>>>;
  not?: InputMaybe<ComponentContentContactFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContentContactFiltersInput>>>;
};

export type ComponentContentContactInput = {
  Company?: InputMaybe<Scalars['String']['input']>;
  Email?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Position?: InputMaybe<Scalars['String']['input']>;
  ProfilePicture?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentContentQuiz = {
  __typename?: 'ComponentContentQuiz';
  Answers: Array<Maybe<ComponentContentQuizAnswer>>;
  Question: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};


export type ComponentContentQuizAnswersArgs = {
  filters?: InputMaybe<ComponentContentQuizAnswerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentContentQuizAnswer = {
  __typename?: 'ComponentContentQuizAnswer';
  Answer: Scalars['String']['output'];
  IsCorrect: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
};

export type ComponentContentQuizAnswerFiltersInput = {
  Answer?: InputMaybe<StringFilterInput>;
  IsCorrect?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentContentQuizAnswerFiltersInput>>>;
  not?: InputMaybe<ComponentContentQuizAnswerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContentQuizAnswerFiltersInput>>>;
};

export type ComponentContentQuizAnswerInput = {
  Answer?: InputMaybe<Scalars['String']['input']>;
  IsCorrect?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentContentQuizFiltersInput = {
  Answers?: InputMaybe<ComponentContentQuizAnswerFiltersInput>;
  Question?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentContentQuizFiltersInput>>>;
  not?: InputMaybe<ComponentContentQuizFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContentQuizFiltersInput>>>;
};

export type ComponentContentQuizInput = {
  Answers?: InputMaybe<Array<InputMaybe<ComponentContentQuizAnswerInput>>>;
  Question?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentContentShortLink = {
  __typename?: 'ComponentContentShortLink';
  Icon?: Maybe<ComponentGenericIcon>;
  Label: Scalars['String']['output'];
  NewWindow?: Maybe<Scalars['Boolean']['output']>;
  URL: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type ComponentContentShortLinkFiltersInput = {
  Icon?: InputMaybe<ComponentGenericIconFiltersInput>;
  Label?: InputMaybe<StringFilterInput>;
  NewWindow?: InputMaybe<BooleanFilterInput>;
  URL?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentContentShortLinkFiltersInput>>>;
  not?: InputMaybe<ComponentContentShortLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContentShortLinkFiltersInput>>>;
};

export type ComponentContentShortLinkInput = {
  Icon?: InputMaybe<ComponentGenericIconInput>;
  Label?: InputMaybe<Scalars['String']['input']>;
  NewWindow?: InputMaybe<Scalars['Boolean']['input']>;
  URL?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentContentUsp = {
  __typename?: 'ComponentContentUsp';
  Icon?: Maybe<ComponentGenericIcon>;
  Title: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type ComponentContentUspFiltersInput = {
  Icon?: InputMaybe<ComponentGenericIconFiltersInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentContentUspFiltersInput>>>;
  not?: InputMaybe<ComponentContentUspFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContentUspFiltersInput>>>;
};

export type ComponentContentUspInput = {
  Icon?: InputMaybe<ComponentGenericIconInput>;
  Title?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentGenericIcon = {
  __typename?: 'ComponentGenericIcon';
  Icon?: Maybe<Enum_Componentgenericicon_Icon>;
  id: Scalars['ID']['output'];
};

export type ComponentGenericIconFiltersInput = {
  Icon?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentGenericIconFiltersInput>>>;
  not?: InputMaybe<ComponentGenericIconFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentGenericIconFiltersInput>>>;
};

export type ComponentGenericIconInput = {
  Icon?: InputMaybe<Enum_Componentgenericicon_Icon>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentGenericString = {
  __typename?: 'ComponentGenericString';
  Title?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentGenericStringFiltersInput = {
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentGenericStringFiltersInput>>>;
  not?: InputMaybe<ComponentGenericStringFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentGenericStringFiltersInput>>>;
};

export type ComponentGenericStringInput = {
  Title?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Contact = {
  __typename?: 'Contact';
  ContactDetails?: Maybe<ComponentContentContact>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ContactEntity = {
  __typename?: 'ContactEntity';
  attributes?: Maybe<Contact>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ContactEntityResponse = {
  __typename?: 'ContactEntityResponse';
  data?: Maybe<ContactEntity>;
};

export type ContactEntityResponseCollection = {
  __typename?: 'ContactEntityResponseCollection';
  data: Array<ContactEntity>;
  meta: ResponseCollectionMeta;
};

export type ContactFiltersInput = {
  ContactDetails?: InputMaybe<ComponentContentContactFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ContactFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ContactFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContactFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContactInput = {
  ContactDetails?: InputMaybe<ComponentContentContactInput>;
};

export type ContactRelationResponseCollection = {
  __typename?: 'ContactRelationResponseCollection';
  data: Array<ContactEntity>;
};

export type Course = {
  __typename?: 'Course';
  Banner?: Maybe<UploadFileEntityResponse>;
  Description?: Maybe<Scalars['String']['output']>;
  Instructors?: Maybe<ContactRelationResponseCollection>;
  Learnings?: Maybe<Array<Maybe<ComponentGenericString>>>;
  Name: Scalars['String']['output'];
  QuickLinks?: Maybe<Array<Maybe<ComponentContentShortLink>>>;
  Slug: Scalars['String']['output'];
  Thumbnail?: Maybe<UploadFileEntityResponse>;
  USPs?: Maybe<Array<Maybe<ComponentContentUsp>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  levels?: Maybe<LevelRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CourseInstructorsArgs = {
  filters?: InputMaybe<ContactFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CourseLearningsArgs = {
  filters?: InputMaybe<ComponentGenericStringFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CourseQuickLinksArgs = {
  filters?: InputMaybe<ComponentContentShortLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CourseUsPsArgs = {
  filters?: InputMaybe<ComponentContentUspFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CourseLevelsArgs = {
  filters?: InputMaybe<LevelFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CourseEntity = {
  __typename?: 'CourseEntity';
  attributes?: Maybe<Course>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CourseEntityResponse = {
  __typename?: 'CourseEntityResponse';
  data?: Maybe<CourseEntity>;
};

export type CourseEntityResponseCollection = {
  __typename?: 'CourseEntityResponseCollection';
  data: Array<CourseEntity>;
  meta: ResponseCollectionMeta;
};

export type CourseFiltersInput = {
  Description?: InputMaybe<StringFilterInput>;
  Instructors?: InputMaybe<ContactFiltersInput>;
  Learnings?: InputMaybe<ComponentGenericStringFiltersInput>;
  Name?: InputMaybe<StringFilterInput>;
  QuickLinks?: InputMaybe<ComponentContentShortLinkFiltersInput>;
  Slug?: InputMaybe<StringFilterInput>;
  USPs?: InputMaybe<ComponentContentUspFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<CourseFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  levels?: InputMaybe<LevelFiltersInput>;
  not?: InputMaybe<CourseFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CourseFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CourseInput = {
  Banner?: InputMaybe<Scalars['ID']['input']>;
  Description?: InputMaybe<Scalars['String']['input']>;
  Instructors?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  Learnings?: InputMaybe<Array<InputMaybe<ComponentGenericStringInput>>>;
  Name?: InputMaybe<Scalars['String']['input']>;
  QuickLinks?: InputMaybe<Array<InputMaybe<ComponentContentShortLinkInput>>>;
  Slug?: InputMaybe<Scalars['String']['input']>;
  Thumbnail?: InputMaybe<Scalars['ID']['input']>;
  USPs?: InputMaybe<Array<InputMaybe<ComponentContentUspInput>>>;
  levels?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Componentgenericicon_Icon {
  Award = 'award',
  Calendar = 'calendar',
  ChartSimple = 'chart_simple',
  CheckInCircle = 'check_in_circle',
  ChevronUp = 'chevron_up',
  ChevronUpFilled = 'chevron_up_filled',
  Clipboard = 'clipboard',
  Close = 'close',
  Earth = 'earth',
  File = 'file',
  FilePowerpoint = 'file_powerpoint',
  Gear = 'gear',
  Hamburger = 'hamburger',
  LayerGroup = 'layer_group',
  MagnifyingGlass = 'magnifying_glass',
  MenuFold = 'menu_fold',
  MenuUnfold = 'menu_unfold',
  Moon = 'moon',
  Sun = 'sun',
  Trophy = 'trophy',
  User = 'user',
  Users = 'users'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Chapter | ComponentContentCallToAction | ComponentContentContact | ComponentContentQuiz | ComponentContentQuizAnswer | ComponentContentShortLink | ComponentContentUsp | ComponentGenericIcon | ComponentGenericString | Contact | Course | I18NLocale | Level | Subchapter | Translation | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Level = {
  __typename?: 'Level';
  Name: Scalars['String']['output'];
  Slug: Scalars['String']['output'];
  chapters?: Maybe<ChapterRelationResponseCollection>;
  course?: Maybe<CourseEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type LevelChaptersArgs = {
  filters?: InputMaybe<ChapterFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LevelEntity = {
  __typename?: 'LevelEntity';
  attributes?: Maybe<Level>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type LevelEntityResponse = {
  __typename?: 'LevelEntityResponse';
  data?: Maybe<LevelEntity>;
};

export type LevelEntityResponseCollection = {
  __typename?: 'LevelEntityResponseCollection';
  data: Array<LevelEntity>;
  meta: ResponseCollectionMeta;
};

export type LevelFiltersInput = {
  Name?: InputMaybe<StringFilterInput>;
  Slug?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<LevelFiltersInput>>>;
  chapters?: InputMaybe<ChapterFiltersInput>;
  course?: InputMaybe<CourseFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<LevelFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LevelFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LevelInput = {
  Name?: InputMaybe<Scalars['String']['input']>;
  Slug?: InputMaybe<Scalars['String']['input']>;
  chapters?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  course?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LevelRelationResponseCollection = {
  __typename?: 'LevelRelationResponseCollection';
  data: Array<LevelEntity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createChapter?: Maybe<ChapterEntityResponse>;
  createContact?: Maybe<ContactEntityResponse>;
  createCourse?: Maybe<CourseEntityResponse>;
  createLevel?: Maybe<LevelEntityResponse>;
  createSubchapter?: Maybe<SubchapterEntityResponse>;
  createTranslation?: Maybe<TranslationEntityResponse>;
  createTranslationLocalization?: Maybe<TranslationEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteChapter?: Maybe<ChapterEntityResponse>;
  deleteContact?: Maybe<ContactEntityResponse>;
  deleteCourse?: Maybe<CourseEntityResponse>;
  deleteLevel?: Maybe<LevelEntityResponse>;
  deleteSubchapter?: Maybe<SubchapterEntityResponse>;
  deleteTranslation?: Maybe<TranslationEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateChapter?: Maybe<ChapterEntityResponse>;
  updateContact?: Maybe<ContactEntityResponse>;
  updateCourse?: Maybe<CourseEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateLevel?: Maybe<LevelEntityResponse>;
  updateSubchapter?: Maybe<SubchapterEntityResponse>;
  updateTranslation?: Maybe<TranslationEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateChapterArgs = {
  data: ChapterInput;
};


export type MutationCreateContactArgs = {
  data: ContactInput;
};


export type MutationCreateCourseArgs = {
  data: CourseInput;
};


export type MutationCreateLevelArgs = {
  data: LevelInput;
};


export type MutationCreateSubchapterArgs = {
  data: SubchapterInput;
};


export type MutationCreateTranslationArgs = {
  data: TranslationInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateTranslationLocalizationArgs = {
  data?: InputMaybe<TranslationInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteChapterArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteContactArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCourseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLevelArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSubchapterArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTranslationArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateChapterArgs = {
  data: ChapterInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateContactArgs = {
  data: ContactInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCourseArgs = {
  data: CourseInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateLevelArgs = {
  data: LevelInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSubchapterArgs = {
  data: SubchapterInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTranslationArgs = {
  data: TranslationInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  chapter?: Maybe<ChapterEntityResponse>;
  chapters?: Maybe<ChapterEntityResponseCollection>;
  contact?: Maybe<ContactEntityResponse>;
  contacts?: Maybe<ContactEntityResponseCollection>;
  course?: Maybe<CourseEntityResponse>;
  courses?: Maybe<CourseEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  level?: Maybe<LevelEntityResponse>;
  levels?: Maybe<LevelEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  subchapter?: Maybe<SubchapterEntityResponse>;
  subchapters?: Maybe<SubchapterEntityResponseCollection>;
  translation?: Maybe<TranslationEntityResponse>;
  translations?: Maybe<TranslationEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryChapterArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryChaptersArgs = {
  filters?: InputMaybe<ChapterFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContactArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryContactsArgs = {
  filters?: InputMaybe<ContactFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCourseArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCoursesArgs = {
  filters?: InputMaybe<CourseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLevelArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryLevelsArgs = {
  filters?: InputMaybe<LevelFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySubchapterArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySubchaptersArgs = {
  filters?: InputMaybe<SubchapterFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTranslationArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryTranslationsArgs = {
  filters?: InputMaybe<TranslationFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Subchapter = {
  __typename?: 'Subchapter';
  FurtherReadings?: Maybe<Array<Maybe<ComponentContentCallToAction>>>;
  Literature?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Quiz?: Maybe<Array<Maybe<ComponentContentQuiz>>>;
  Slug: Scalars['String']['output'];
  YouTubeURL?: Maybe<Scalars['String']['output']>;
  chapter?: Maybe<ChapterEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type SubchapterFurtherReadingsArgs = {
  filters?: InputMaybe<ComponentContentCallToActionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SubchapterQuizArgs = {
  filters?: InputMaybe<ComponentContentQuizFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SubchapterEntity = {
  __typename?: 'SubchapterEntity';
  attributes?: Maybe<Subchapter>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SubchapterEntityResponse = {
  __typename?: 'SubchapterEntityResponse';
  data?: Maybe<SubchapterEntity>;
};

export type SubchapterEntityResponseCollection = {
  __typename?: 'SubchapterEntityResponseCollection';
  data: Array<SubchapterEntity>;
  meta: ResponseCollectionMeta;
};

export type SubchapterFiltersInput = {
  FurtherReadings?: InputMaybe<ComponentContentCallToActionFiltersInput>;
  Literature?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Quiz?: InputMaybe<ComponentContentQuizFiltersInput>;
  Slug?: InputMaybe<StringFilterInput>;
  YouTubeURL?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<SubchapterFiltersInput>>>;
  chapter?: InputMaybe<ChapterFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<SubchapterFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SubchapterFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SubchapterInput = {
  FurtherReadings?: InputMaybe<Array<InputMaybe<ComponentContentCallToActionInput>>>;
  Literature?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Quiz?: InputMaybe<Array<InputMaybe<ComponentContentQuizInput>>>;
  Slug?: InputMaybe<Scalars['String']['input']>;
  YouTubeURL?: InputMaybe<Scalars['String']['input']>;
  chapter?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SubchapterRelationResponseCollection = {
  __typename?: 'SubchapterRelationResponseCollection';
  data: Array<SubchapterEntity>;
};

export type Translation = {
  __typename?: 'Translation';
  Identifier: Scalars['String']['output'];
  Translation: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<TranslationRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TranslationLocalizationsArgs = {
  filters?: InputMaybe<TranslationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TranslationEntity = {
  __typename?: 'TranslationEntity';
  attributes?: Maybe<Translation>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TranslationEntityResponse = {
  __typename?: 'TranslationEntityResponse';
  data?: Maybe<TranslationEntity>;
};

export type TranslationEntityResponseCollection = {
  __typename?: 'TranslationEntityResponseCollection';
  data: Array<TranslationEntity>;
  meta: ResponseCollectionMeta;
};

export type TranslationFiltersInput = {
  Identifier?: InputMaybe<StringFilterInput>;
  Translation?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<TranslationFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<TranslationFiltersInput>;
  not?: InputMaybe<TranslationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TranslationFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TranslationInput = {
  Identifier?: InputMaybe<Scalars['String']['input']>;
  Translation?: InputMaybe<Scalars['String']['input']>;
};

export type TranslationRelationResponseCollection = {
  __typename?: 'TranslationRelationResponseCollection';
  data: Array<TranslationEntity>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  GenericMorph: ( Chapter ) | ( ComponentContentCallToAction ) | ( ComponentContentContact ) | ( ComponentContentQuiz ) | ( ComponentContentQuizAnswer ) | ( ComponentContentShortLink ) | ( ComponentContentUsp ) | ( ComponentGenericIcon ) | ( ComponentGenericString ) | ( Contact ) | ( Course ) | ( I18NLocale ) | ( Level ) | ( Subchapter ) | ( Translation ) | ( Omit<UploadFile, 'related'> & { related?: Maybe<Array<Maybe<RefType['GenericMorph']>>> } ) | ( UploadFolder ) | ( UsersPermissionsPermission ) | ( UsersPermissionsRole ) | ( UsersPermissionsUser );
}>;


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  BooleanFilterInput: BooleanFilterInput;
  Chapter: ResolverTypeWrapper<Chapter>;
  ChapterEntity: ResolverTypeWrapper<ChapterEntity>;
  ChapterEntityResponse: ResolverTypeWrapper<ChapterEntityResponse>;
  ChapterEntityResponseCollection: ResolverTypeWrapper<ChapterEntityResponseCollection>;
  ChapterFiltersInput: ChapterFiltersInput;
  ChapterInput: ChapterInput;
  ChapterRelationResponseCollection: ResolverTypeWrapper<ChapterRelationResponseCollection>;
  ComponentContentCallToAction: ResolverTypeWrapper<ComponentContentCallToAction>;
  ComponentContentCallToActionFiltersInput: ComponentContentCallToActionFiltersInput;
  ComponentContentCallToActionInput: ComponentContentCallToActionInput;
  ComponentContentContact: ResolverTypeWrapper<ComponentContentContact>;
  ComponentContentContactFiltersInput: ComponentContentContactFiltersInput;
  ComponentContentContactInput: ComponentContentContactInput;
  ComponentContentQuiz: ResolverTypeWrapper<ComponentContentQuiz>;
  ComponentContentQuizAnswer: ResolverTypeWrapper<ComponentContentQuizAnswer>;
  ComponentContentQuizAnswerFiltersInput: ComponentContentQuizAnswerFiltersInput;
  ComponentContentQuizAnswerInput: ComponentContentQuizAnswerInput;
  ComponentContentQuizFiltersInput: ComponentContentQuizFiltersInput;
  ComponentContentQuizInput: ComponentContentQuizInput;
  ComponentContentShortLink: ResolverTypeWrapper<ComponentContentShortLink>;
  ComponentContentShortLinkFiltersInput: ComponentContentShortLinkFiltersInput;
  ComponentContentShortLinkInput: ComponentContentShortLinkInput;
  ComponentContentUsp: ResolverTypeWrapper<ComponentContentUsp>;
  ComponentContentUspFiltersInput: ComponentContentUspFiltersInput;
  ComponentContentUspInput: ComponentContentUspInput;
  ComponentGenericIcon: ResolverTypeWrapper<ComponentGenericIcon>;
  ComponentGenericIconFiltersInput: ComponentGenericIconFiltersInput;
  ComponentGenericIconInput: ComponentGenericIconInput;
  ComponentGenericString: ResolverTypeWrapper<ComponentGenericString>;
  ComponentGenericStringFiltersInput: ComponentGenericStringFiltersInput;
  ComponentGenericStringInput: ComponentGenericStringInput;
  Contact: ResolverTypeWrapper<Contact>;
  ContactEntity: ResolverTypeWrapper<ContactEntity>;
  ContactEntityResponse: ResolverTypeWrapper<ContactEntityResponse>;
  ContactEntityResponseCollection: ResolverTypeWrapper<ContactEntityResponseCollection>;
  ContactFiltersInput: ContactFiltersInput;
  ContactInput: ContactInput;
  ContactRelationResponseCollection: ResolverTypeWrapper<ContactRelationResponseCollection>;
  Course: ResolverTypeWrapper<Course>;
  CourseEntity: ResolverTypeWrapper<CourseEntity>;
  CourseEntityResponse: ResolverTypeWrapper<CourseEntityResponse>;
  CourseEntityResponseCollection: ResolverTypeWrapper<CourseEntityResponseCollection>;
  CourseFiltersInput: CourseFiltersInput;
  CourseInput: CourseInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DateTimeFilterInput: DateTimeFilterInput;
  ENUM_COMPONENTGENERICICON_ICON: Enum_Componentgenericicon_Icon;
  FileInfoInput: FileInfoInput;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  FloatFilterInput: FloatFilterInput;
  GenericMorph: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['GenericMorph']>;
  I18NLocale: ResolverTypeWrapper<I18NLocale>;
  I18NLocaleCode: ResolverTypeWrapper<Scalars['I18NLocaleCode']['output']>;
  I18NLocaleEntity: ResolverTypeWrapper<I18NLocaleEntity>;
  I18NLocaleEntityResponse: ResolverTypeWrapper<I18NLocaleEntityResponse>;
  I18NLocaleEntityResponseCollection: ResolverTypeWrapper<I18NLocaleEntityResponseCollection>;
  I18NLocaleFiltersInput: I18NLocaleFiltersInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  IDFilterInput: IdFilterInput;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  IntFilterInput: IntFilterInput;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  JSONFilterInput: JsonFilterInput;
  Level: ResolverTypeWrapper<Level>;
  LevelEntity: ResolverTypeWrapper<LevelEntity>;
  LevelEntityResponse: ResolverTypeWrapper<LevelEntityResponse>;
  LevelEntityResponseCollection: ResolverTypeWrapper<LevelEntityResponseCollection>;
  LevelFiltersInput: LevelFiltersInput;
  LevelInput: LevelInput;
  LevelRelationResponseCollection: ResolverTypeWrapper<LevelRelationResponseCollection>;
  Mutation: ResolverTypeWrapper<{}>;
  Pagination: ResolverTypeWrapper<Pagination>;
  PaginationArg: PaginationArg;
  PublicationState: PublicationState;
  Query: ResolverTypeWrapper<{}>;
  ResponseCollectionMeta: ResolverTypeWrapper<ResponseCollectionMeta>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringFilterInput: StringFilterInput;
  Subchapter: ResolverTypeWrapper<Subchapter>;
  SubchapterEntity: ResolverTypeWrapper<SubchapterEntity>;
  SubchapterEntityResponse: ResolverTypeWrapper<SubchapterEntityResponse>;
  SubchapterEntityResponseCollection: ResolverTypeWrapper<SubchapterEntityResponseCollection>;
  SubchapterFiltersInput: SubchapterFiltersInput;
  SubchapterInput: SubchapterInput;
  SubchapterRelationResponseCollection: ResolverTypeWrapper<SubchapterRelationResponseCollection>;
  Translation: ResolverTypeWrapper<Translation>;
  TranslationEntity: ResolverTypeWrapper<TranslationEntity>;
  TranslationEntityResponse: ResolverTypeWrapper<TranslationEntityResponse>;
  TranslationEntityResponseCollection: ResolverTypeWrapper<TranslationEntityResponseCollection>;
  TranslationFiltersInput: TranslationFiltersInput;
  TranslationInput: TranslationInput;
  TranslationRelationResponseCollection: ResolverTypeWrapper<TranslationRelationResponseCollection>;
  Upload: ResolverTypeWrapper<Scalars['Upload']['output']>;
  UploadFile: ResolverTypeWrapper<Omit<UploadFile, 'related'> & { related?: Maybe<Array<Maybe<ResolversTypes['GenericMorph']>>> }>;
  UploadFileEntity: ResolverTypeWrapper<UploadFileEntity>;
  UploadFileEntityResponse: ResolverTypeWrapper<UploadFileEntityResponse>;
  UploadFileEntityResponseCollection: ResolverTypeWrapper<UploadFileEntityResponseCollection>;
  UploadFileFiltersInput: UploadFileFiltersInput;
  UploadFileInput: UploadFileInput;
  UploadFileRelationResponseCollection: ResolverTypeWrapper<UploadFileRelationResponseCollection>;
  UploadFolder: ResolverTypeWrapper<UploadFolder>;
  UploadFolderEntity: ResolverTypeWrapper<UploadFolderEntity>;
  UploadFolderEntityResponse: ResolverTypeWrapper<UploadFolderEntityResponse>;
  UploadFolderEntityResponseCollection: ResolverTypeWrapper<UploadFolderEntityResponseCollection>;
  UploadFolderFiltersInput: UploadFolderFiltersInput;
  UploadFolderInput: UploadFolderInput;
  UploadFolderRelationResponseCollection: ResolverTypeWrapper<UploadFolderRelationResponseCollection>;
  UsersPermissionsCreateRolePayload: ResolverTypeWrapper<UsersPermissionsCreateRolePayload>;
  UsersPermissionsDeleteRolePayload: ResolverTypeWrapper<UsersPermissionsDeleteRolePayload>;
  UsersPermissionsLoginInput: UsersPermissionsLoginInput;
  UsersPermissionsLoginPayload: ResolverTypeWrapper<UsersPermissionsLoginPayload>;
  UsersPermissionsMe: ResolverTypeWrapper<UsersPermissionsMe>;
  UsersPermissionsMeRole: ResolverTypeWrapper<UsersPermissionsMeRole>;
  UsersPermissionsPasswordPayload: ResolverTypeWrapper<UsersPermissionsPasswordPayload>;
  UsersPermissionsPermission: ResolverTypeWrapper<UsersPermissionsPermission>;
  UsersPermissionsPermissionEntity: ResolverTypeWrapper<UsersPermissionsPermissionEntity>;
  UsersPermissionsPermissionFiltersInput: UsersPermissionsPermissionFiltersInput;
  UsersPermissionsPermissionRelationResponseCollection: ResolverTypeWrapper<UsersPermissionsPermissionRelationResponseCollection>;
  UsersPermissionsRegisterInput: UsersPermissionsRegisterInput;
  UsersPermissionsRole: ResolverTypeWrapper<UsersPermissionsRole>;
  UsersPermissionsRoleEntity: ResolverTypeWrapper<UsersPermissionsRoleEntity>;
  UsersPermissionsRoleEntityResponse: ResolverTypeWrapper<UsersPermissionsRoleEntityResponse>;
  UsersPermissionsRoleEntityResponseCollection: ResolverTypeWrapper<UsersPermissionsRoleEntityResponseCollection>;
  UsersPermissionsRoleFiltersInput: UsersPermissionsRoleFiltersInput;
  UsersPermissionsRoleInput: UsersPermissionsRoleInput;
  UsersPermissionsUpdateRolePayload: ResolverTypeWrapper<UsersPermissionsUpdateRolePayload>;
  UsersPermissionsUser: ResolverTypeWrapper<UsersPermissionsUser>;
  UsersPermissionsUserEntity: ResolverTypeWrapper<UsersPermissionsUserEntity>;
  UsersPermissionsUserEntityResponse: ResolverTypeWrapper<UsersPermissionsUserEntityResponse>;
  UsersPermissionsUserEntityResponseCollection: ResolverTypeWrapper<UsersPermissionsUserEntityResponseCollection>;
  UsersPermissionsUserFiltersInput: UsersPermissionsUserFiltersInput;
  UsersPermissionsUserInput: UsersPermissionsUserInput;
  UsersPermissionsUserRelationResponseCollection: ResolverTypeWrapper<UsersPermissionsUserRelationResponseCollection>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  BooleanFilterInput: BooleanFilterInput;
  Chapter: Chapter;
  ChapterEntity: ChapterEntity;
  ChapterEntityResponse: ChapterEntityResponse;
  ChapterEntityResponseCollection: ChapterEntityResponseCollection;
  ChapterFiltersInput: ChapterFiltersInput;
  ChapterInput: ChapterInput;
  ChapterRelationResponseCollection: ChapterRelationResponseCollection;
  ComponentContentCallToAction: ComponentContentCallToAction;
  ComponentContentCallToActionFiltersInput: ComponentContentCallToActionFiltersInput;
  ComponentContentCallToActionInput: ComponentContentCallToActionInput;
  ComponentContentContact: ComponentContentContact;
  ComponentContentContactFiltersInput: ComponentContentContactFiltersInput;
  ComponentContentContactInput: ComponentContentContactInput;
  ComponentContentQuiz: ComponentContentQuiz;
  ComponentContentQuizAnswer: ComponentContentQuizAnswer;
  ComponentContentQuizAnswerFiltersInput: ComponentContentQuizAnswerFiltersInput;
  ComponentContentQuizAnswerInput: ComponentContentQuizAnswerInput;
  ComponentContentQuizFiltersInput: ComponentContentQuizFiltersInput;
  ComponentContentQuizInput: ComponentContentQuizInput;
  ComponentContentShortLink: ComponentContentShortLink;
  ComponentContentShortLinkFiltersInput: ComponentContentShortLinkFiltersInput;
  ComponentContentShortLinkInput: ComponentContentShortLinkInput;
  ComponentContentUsp: ComponentContentUsp;
  ComponentContentUspFiltersInput: ComponentContentUspFiltersInput;
  ComponentContentUspInput: ComponentContentUspInput;
  ComponentGenericIcon: ComponentGenericIcon;
  ComponentGenericIconFiltersInput: ComponentGenericIconFiltersInput;
  ComponentGenericIconInput: ComponentGenericIconInput;
  ComponentGenericString: ComponentGenericString;
  ComponentGenericStringFiltersInput: ComponentGenericStringFiltersInput;
  ComponentGenericStringInput: ComponentGenericStringInput;
  Contact: Contact;
  ContactEntity: ContactEntity;
  ContactEntityResponse: ContactEntityResponse;
  ContactEntityResponseCollection: ContactEntityResponseCollection;
  ContactFiltersInput: ContactFiltersInput;
  ContactInput: ContactInput;
  ContactRelationResponseCollection: ContactRelationResponseCollection;
  Course: Course;
  CourseEntity: CourseEntity;
  CourseEntityResponse: CourseEntityResponse;
  CourseEntityResponseCollection: CourseEntityResponseCollection;
  CourseFiltersInput: CourseFiltersInput;
  CourseInput: CourseInput;
  DateTime: Scalars['DateTime']['output'];
  DateTimeFilterInput: DateTimeFilterInput;
  FileInfoInput: FileInfoInput;
  Float: Scalars['Float']['output'];
  FloatFilterInput: FloatFilterInput;
  GenericMorph: ResolversUnionTypes<ResolversParentTypes>['GenericMorph'];
  I18NLocale: I18NLocale;
  I18NLocaleCode: Scalars['I18NLocaleCode']['output'];
  I18NLocaleEntity: I18NLocaleEntity;
  I18NLocaleEntityResponse: I18NLocaleEntityResponse;
  I18NLocaleEntityResponseCollection: I18NLocaleEntityResponseCollection;
  I18NLocaleFiltersInput: I18NLocaleFiltersInput;
  ID: Scalars['ID']['output'];
  IDFilterInput: IdFilterInput;
  Int: Scalars['Int']['output'];
  IntFilterInput: IntFilterInput;
  JSON: Scalars['JSON']['output'];
  JSONFilterInput: JsonFilterInput;
  Level: Level;
  LevelEntity: LevelEntity;
  LevelEntityResponse: LevelEntityResponse;
  LevelEntityResponseCollection: LevelEntityResponseCollection;
  LevelFiltersInput: LevelFiltersInput;
  LevelInput: LevelInput;
  LevelRelationResponseCollection: LevelRelationResponseCollection;
  Mutation: {};
  Pagination: Pagination;
  PaginationArg: PaginationArg;
  Query: {};
  ResponseCollectionMeta: ResponseCollectionMeta;
  String: Scalars['String']['output'];
  StringFilterInput: StringFilterInput;
  Subchapter: Subchapter;
  SubchapterEntity: SubchapterEntity;
  SubchapterEntityResponse: SubchapterEntityResponse;
  SubchapterEntityResponseCollection: SubchapterEntityResponseCollection;
  SubchapterFiltersInput: SubchapterFiltersInput;
  SubchapterInput: SubchapterInput;
  SubchapterRelationResponseCollection: SubchapterRelationResponseCollection;
  Translation: Translation;
  TranslationEntity: TranslationEntity;
  TranslationEntityResponse: TranslationEntityResponse;
  TranslationEntityResponseCollection: TranslationEntityResponseCollection;
  TranslationFiltersInput: TranslationFiltersInput;
  TranslationInput: TranslationInput;
  TranslationRelationResponseCollection: TranslationRelationResponseCollection;
  Upload: Scalars['Upload']['output'];
  UploadFile: Omit<UploadFile, 'related'> & { related?: Maybe<Array<Maybe<ResolversParentTypes['GenericMorph']>>> };
  UploadFileEntity: UploadFileEntity;
  UploadFileEntityResponse: UploadFileEntityResponse;
  UploadFileEntityResponseCollection: UploadFileEntityResponseCollection;
  UploadFileFiltersInput: UploadFileFiltersInput;
  UploadFileInput: UploadFileInput;
  UploadFileRelationResponseCollection: UploadFileRelationResponseCollection;
  UploadFolder: UploadFolder;
  UploadFolderEntity: UploadFolderEntity;
  UploadFolderEntityResponse: UploadFolderEntityResponse;
  UploadFolderEntityResponseCollection: UploadFolderEntityResponseCollection;
  UploadFolderFiltersInput: UploadFolderFiltersInput;
  UploadFolderInput: UploadFolderInput;
  UploadFolderRelationResponseCollection: UploadFolderRelationResponseCollection;
  UsersPermissionsCreateRolePayload: UsersPermissionsCreateRolePayload;
  UsersPermissionsDeleteRolePayload: UsersPermissionsDeleteRolePayload;
  UsersPermissionsLoginInput: UsersPermissionsLoginInput;
  UsersPermissionsLoginPayload: UsersPermissionsLoginPayload;
  UsersPermissionsMe: UsersPermissionsMe;
  UsersPermissionsMeRole: UsersPermissionsMeRole;
  UsersPermissionsPasswordPayload: UsersPermissionsPasswordPayload;
  UsersPermissionsPermission: UsersPermissionsPermission;
  UsersPermissionsPermissionEntity: UsersPermissionsPermissionEntity;
  UsersPermissionsPermissionFiltersInput: UsersPermissionsPermissionFiltersInput;
  UsersPermissionsPermissionRelationResponseCollection: UsersPermissionsPermissionRelationResponseCollection;
  UsersPermissionsRegisterInput: UsersPermissionsRegisterInput;
  UsersPermissionsRole: UsersPermissionsRole;
  UsersPermissionsRoleEntity: UsersPermissionsRoleEntity;
  UsersPermissionsRoleEntityResponse: UsersPermissionsRoleEntityResponse;
  UsersPermissionsRoleEntityResponseCollection: UsersPermissionsRoleEntityResponseCollection;
  UsersPermissionsRoleFiltersInput: UsersPermissionsRoleFiltersInput;
  UsersPermissionsRoleInput: UsersPermissionsRoleInput;
  UsersPermissionsUpdateRolePayload: UsersPermissionsUpdateRolePayload;
  UsersPermissionsUser: UsersPermissionsUser;
  UsersPermissionsUserEntity: UsersPermissionsUserEntity;
  UsersPermissionsUserEntityResponse: UsersPermissionsUserEntityResponse;
  UsersPermissionsUserEntityResponseCollection: UsersPermissionsUserEntityResponseCollection;
  UsersPermissionsUserFiltersInput: UsersPermissionsUserFiltersInput;
  UsersPermissionsUserInput: UsersPermissionsUserInput;
  UsersPermissionsUserRelationResponseCollection: UsersPermissionsUserRelationResponseCollection;
}>;

export type ChapterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Chapter'] = ResolversParentTypes['Chapter']> = ResolversObject<{
  Name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['LevelEntityResponse']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  subchapters?: Resolver<Maybe<ResolversTypes['SubchapterRelationResponseCollection']>, ParentType, ContextType, RequireFields<ChapterSubchaptersArgs, 'pagination' | 'publicationState' | 'sort'>>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChapterEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChapterEntity'] = ResolversParentTypes['ChapterEntity']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['Chapter']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChapterEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChapterEntityResponse'] = ResolversParentTypes['ChapterEntityResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['ChapterEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChapterEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChapterEntityResponseCollection'] = ResolversParentTypes['ChapterEntityResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['ChapterEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChapterRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChapterRelationResponseCollection'] = ResolversParentTypes['ChapterRelationResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['ChapterEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ComponentContentCallToActionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentContentCallToAction'] = ResolversParentTypes['ComponentContentCallToAction']> = ResolversObject<{
  Label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  NewWindow?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  URL?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ComponentContentContactResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentContentContact'] = ResolversParentTypes['ComponentContentContact']> = ResolversObject<{
  Company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ProfilePicture?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ComponentContentQuizResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentContentQuiz'] = ResolversParentTypes['ComponentContentQuiz']> = ResolversObject<{
  Answers?: Resolver<Array<Maybe<ResolversTypes['ComponentContentQuizAnswer']>>, ParentType, ContextType, RequireFields<ComponentContentQuizAnswersArgs, 'pagination' | 'sort'>>;
  Question?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ComponentContentQuizAnswerResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentContentQuizAnswer'] = ResolversParentTypes['ComponentContentQuizAnswer']> = ResolversObject<{
  Answer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  IsCorrect?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ComponentContentShortLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentContentShortLink'] = ResolversParentTypes['ComponentContentShortLink']> = ResolversObject<{
  Icon?: Resolver<Maybe<ResolversTypes['ComponentGenericIcon']>, ParentType, ContextType>;
  Label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  NewWindow?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  URL?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ComponentContentUspResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentContentUsp'] = ResolversParentTypes['ComponentContentUsp']> = ResolversObject<{
  Icon?: Resolver<Maybe<ResolversTypes['ComponentGenericIcon']>, ParentType, ContextType>;
  Title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ComponentGenericIconResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentGenericIcon'] = ResolversParentTypes['ComponentGenericIcon']> = ResolversObject<{
  Icon?: Resolver<Maybe<ResolversTypes['ENUM_COMPONENTGENERICICON_ICON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ComponentGenericStringResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentGenericString'] = ResolversParentTypes['ComponentGenericString']> = ResolversObject<{
  Title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contact'] = ResolversParentTypes['Contact']> = ResolversObject<{
  ContactDetails?: Resolver<Maybe<ResolversTypes['ComponentContentContact']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactEntity'] = ResolversParentTypes['ContactEntity']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['Contact']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactEntityResponse'] = ResolversParentTypes['ContactEntityResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['ContactEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactEntityResponseCollection'] = ResolversParentTypes['ContactEntityResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['ContactEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactRelationResponseCollection'] = ResolversParentTypes['ContactRelationResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['ContactEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CourseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Course'] = ResolversParentTypes['Course']> = ResolversObject<{
  Banner?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType>;
  Description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Instructors?: Resolver<Maybe<ResolversTypes['ContactRelationResponseCollection']>, ParentType, ContextType, RequireFields<CourseInstructorsArgs, 'pagination' | 'sort'>>;
  Learnings?: Resolver<Maybe<Array<Maybe<ResolversTypes['ComponentGenericString']>>>, ParentType, ContextType, RequireFields<CourseLearningsArgs, 'pagination' | 'sort'>>;
  Name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  QuickLinks?: Resolver<Maybe<Array<Maybe<ResolversTypes['ComponentContentShortLink']>>>, ParentType, ContextType, RequireFields<CourseQuickLinksArgs, 'pagination' | 'sort'>>;
  Slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Thumbnail?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType>;
  USPs?: Resolver<Maybe<Array<Maybe<ResolversTypes['ComponentContentUsp']>>>, ParentType, ContextType, RequireFields<CourseUsPsArgs, 'pagination' | 'sort'>>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  levels?: Resolver<Maybe<ResolversTypes['LevelRelationResponseCollection']>, ParentType, ContextType, RequireFields<CourseLevelsArgs, 'pagination' | 'publicationState' | 'sort'>>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CourseEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['CourseEntity'] = ResolversParentTypes['CourseEntity']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['Course']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CourseEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CourseEntityResponse'] = ResolversParentTypes['CourseEntityResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['CourseEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CourseEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CourseEntityResponseCollection'] = ResolversParentTypes['CourseEntityResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['CourseEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type GenericMorphResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenericMorph'] = ResolversParentTypes['GenericMorph']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Chapter' | 'ComponentContentCallToAction' | 'ComponentContentContact' | 'ComponentContentQuiz' | 'ComponentContentQuizAnswer' | 'ComponentContentShortLink' | 'ComponentContentUsp' | 'ComponentGenericIcon' | 'ComponentGenericString' | 'Contact' | 'Course' | 'I18NLocale' | 'Level' | 'Subchapter' | 'Translation' | 'UploadFile' | 'UploadFolder' | 'UsersPermissionsPermission' | 'UsersPermissionsRole' | 'UsersPermissionsUser', ParentType, ContextType>;
}>;

export type I18NLocaleResolvers<ContextType = any, ParentType extends ResolversParentTypes['I18NLocale'] = ResolversParentTypes['I18NLocale']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface I18NLocaleCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['I18NLocaleCode'], any> {
  name: 'I18NLocaleCode';
}

export type I18NLocaleEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['I18NLocaleEntity'] = ResolversParentTypes['I18NLocaleEntity']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['I18NLocale']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type I18NLocaleEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['I18NLocaleEntityResponse'] = ResolversParentTypes['I18NLocaleEntityResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['I18NLocaleEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type I18NLocaleEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['I18NLocaleEntityResponseCollection'] = ResolversParentTypes['I18NLocaleEntityResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['I18NLocaleEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type LevelResolvers<ContextType = any, ParentType extends ResolversParentTypes['Level'] = ResolversParentTypes['Level']> = ResolversObject<{
  Name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chapters?: Resolver<Maybe<ResolversTypes['ChapterRelationResponseCollection']>, ParentType, ContextType, RequireFields<LevelChaptersArgs, 'pagination' | 'publicationState' | 'sort'>>;
  course?: Resolver<Maybe<ResolversTypes['CourseEntityResponse']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LevelEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['LevelEntity'] = ResolversParentTypes['LevelEntity']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['Level']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LevelEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LevelEntityResponse'] = ResolversParentTypes['LevelEntityResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['LevelEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LevelEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LevelEntityResponseCollection'] = ResolversParentTypes['LevelEntityResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['LevelEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LevelRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LevelRelationResponseCollection'] = ResolversParentTypes['LevelRelationResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['LevelEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  changePassword?: Resolver<Maybe<ResolversTypes['UsersPermissionsLoginPayload']>, ParentType, ContextType, RequireFields<MutationChangePasswordArgs, 'currentPassword' | 'password' | 'passwordConfirmation'>>;
  createChapter?: Resolver<Maybe<ResolversTypes['ChapterEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateChapterArgs, 'data'>>;
  createContact?: Resolver<Maybe<ResolversTypes['ContactEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateContactArgs, 'data'>>;
  createCourse?: Resolver<Maybe<ResolversTypes['CourseEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateCourseArgs, 'data'>>;
  createLevel?: Resolver<Maybe<ResolversTypes['LevelEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateLevelArgs, 'data'>>;
  createSubchapter?: Resolver<Maybe<ResolversTypes['SubchapterEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateSubchapterArgs, 'data'>>;
  createTranslation?: Resolver<Maybe<ResolversTypes['TranslationEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateTranslationArgs, 'data'>>;
  createTranslationLocalization?: Resolver<Maybe<ResolversTypes['TranslationEntityResponse']>, ParentType, ContextType, Partial<MutationCreateTranslationLocalizationArgs>>;
  createUploadFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateUploadFileArgs, 'data'>>;
  createUploadFolder?: Resolver<Maybe<ResolversTypes['UploadFolderEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateUploadFolderArgs, 'data'>>;
  createUsersPermissionsRole?: Resolver<Maybe<ResolversTypes['UsersPermissionsCreateRolePayload']>, ParentType, ContextType, RequireFields<MutationCreateUsersPermissionsRoleArgs, 'data'>>;
  createUsersPermissionsUser?: Resolver<ResolversTypes['UsersPermissionsUserEntityResponse'], ParentType, ContextType, RequireFields<MutationCreateUsersPermissionsUserArgs, 'data'>>;
  deleteChapter?: Resolver<Maybe<ResolversTypes['ChapterEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteChapterArgs, 'id'>>;
  deleteContact?: Resolver<Maybe<ResolversTypes['ContactEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteContactArgs, 'id'>>;
  deleteCourse?: Resolver<Maybe<ResolversTypes['CourseEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteCourseArgs, 'id'>>;
  deleteLevel?: Resolver<Maybe<ResolversTypes['LevelEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteLevelArgs, 'id'>>;
  deleteSubchapter?: Resolver<Maybe<ResolversTypes['SubchapterEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteSubchapterArgs, 'id'>>;
  deleteTranslation?: Resolver<Maybe<ResolversTypes['TranslationEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteTranslationArgs, 'id'>>;
  deleteUploadFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteUploadFileArgs, 'id'>>;
  deleteUploadFolder?: Resolver<Maybe<ResolversTypes['UploadFolderEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteUploadFolderArgs, 'id'>>;
  deleteUsersPermissionsRole?: Resolver<Maybe<ResolversTypes['UsersPermissionsDeleteRolePayload']>, ParentType, ContextType, RequireFields<MutationDeleteUsersPermissionsRoleArgs, 'id'>>;
  deleteUsersPermissionsUser?: Resolver<ResolversTypes['UsersPermissionsUserEntityResponse'], ParentType, ContextType, RequireFields<MutationDeleteUsersPermissionsUserArgs, 'id'>>;
  emailConfirmation?: Resolver<Maybe<ResolversTypes['UsersPermissionsLoginPayload']>, ParentType, ContextType, RequireFields<MutationEmailConfirmationArgs, 'confirmation'>>;
  forgotPassword?: Resolver<Maybe<ResolversTypes['UsersPermissionsPasswordPayload']>, ParentType, ContextType, RequireFields<MutationForgotPasswordArgs, 'email'>>;
  login?: Resolver<ResolversTypes['UsersPermissionsLoginPayload'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
  multipleUpload?: Resolver<Array<Maybe<ResolversTypes['UploadFileEntityResponse']>>, ParentType, ContextType, RequireFields<MutationMultipleUploadArgs, 'files'>>;
  register?: Resolver<ResolversTypes['UsersPermissionsLoginPayload'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'input'>>;
  removeFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, RequireFields<MutationRemoveFileArgs, 'id'>>;
  resetPassword?: Resolver<Maybe<ResolversTypes['UsersPermissionsLoginPayload']>, ParentType, ContextType, RequireFields<MutationResetPasswordArgs, 'code' | 'password' | 'passwordConfirmation'>>;
  updateChapter?: Resolver<Maybe<ResolversTypes['ChapterEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateChapterArgs, 'data' | 'id'>>;
  updateContact?: Resolver<Maybe<ResolversTypes['ContactEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateContactArgs, 'data' | 'id'>>;
  updateCourse?: Resolver<Maybe<ResolversTypes['CourseEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateCourseArgs, 'data' | 'id'>>;
  updateFileInfo?: Resolver<ResolversTypes['UploadFileEntityResponse'], ParentType, ContextType, RequireFields<MutationUpdateFileInfoArgs, 'id'>>;
  updateLevel?: Resolver<Maybe<ResolversTypes['LevelEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateLevelArgs, 'data' | 'id'>>;
  updateSubchapter?: Resolver<Maybe<ResolversTypes['SubchapterEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateSubchapterArgs, 'data' | 'id'>>;
  updateTranslation?: Resolver<Maybe<ResolversTypes['TranslationEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateTranslationArgs, 'data' | 'id'>>;
  updateUploadFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateUploadFileArgs, 'data' | 'id'>>;
  updateUploadFolder?: Resolver<Maybe<ResolversTypes['UploadFolderEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateUploadFolderArgs, 'data' | 'id'>>;
  updateUsersPermissionsRole?: Resolver<Maybe<ResolversTypes['UsersPermissionsUpdateRolePayload']>, ParentType, ContextType, RequireFields<MutationUpdateUsersPermissionsRoleArgs, 'data' | 'id'>>;
  updateUsersPermissionsUser?: Resolver<ResolversTypes['UsersPermissionsUserEntityResponse'], ParentType, ContextType, RequireFields<MutationUpdateUsersPermissionsUserArgs, 'data' | 'id'>>;
  upload?: Resolver<ResolversTypes['UploadFileEntityResponse'], ParentType, ContextType, RequireFields<MutationUploadArgs, 'file'>>;
}>;

export type PaginationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pagination'] = ResolversParentTypes['Pagination']> = ResolversObject<{
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pageCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  chapter?: Resolver<Maybe<ResolversTypes['ChapterEntityResponse']>, ParentType, ContextType, Partial<QueryChapterArgs>>;
  chapters?: Resolver<Maybe<ResolversTypes['ChapterEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryChaptersArgs, 'pagination' | 'publicationState' | 'sort'>>;
  contact?: Resolver<Maybe<ResolversTypes['ContactEntityResponse']>, ParentType, ContextType, Partial<QueryContactArgs>>;
  contacts?: Resolver<Maybe<ResolversTypes['ContactEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryContactsArgs, 'pagination' | 'sort'>>;
  course?: Resolver<Maybe<ResolversTypes['CourseEntityResponse']>, ParentType, ContextType, Partial<QueryCourseArgs>>;
  courses?: Resolver<Maybe<ResolversTypes['CourseEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryCoursesArgs, 'pagination' | 'publicationState' | 'sort'>>;
  i18NLocale?: Resolver<Maybe<ResolversTypes['I18NLocaleEntityResponse']>, ParentType, ContextType, Partial<QueryI18NLocaleArgs>>;
  i18NLocales?: Resolver<Maybe<ResolversTypes['I18NLocaleEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryI18NLocalesArgs, 'pagination' | 'sort'>>;
  level?: Resolver<Maybe<ResolversTypes['LevelEntityResponse']>, ParentType, ContextType, Partial<QueryLevelArgs>>;
  levels?: Resolver<Maybe<ResolversTypes['LevelEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryLevelsArgs, 'pagination' | 'publicationState' | 'sort'>>;
  me?: Resolver<Maybe<ResolversTypes['UsersPermissionsMe']>, ParentType, ContextType>;
  subchapter?: Resolver<Maybe<ResolversTypes['SubchapterEntityResponse']>, ParentType, ContextType, Partial<QuerySubchapterArgs>>;
  subchapters?: Resolver<Maybe<ResolversTypes['SubchapterEntityResponseCollection']>, ParentType, ContextType, RequireFields<QuerySubchaptersArgs, 'pagination' | 'publicationState' | 'sort'>>;
  translation?: Resolver<Maybe<ResolversTypes['TranslationEntityResponse']>, ParentType, ContextType, Partial<QueryTranslationArgs>>;
  translations?: Resolver<Maybe<ResolversTypes['TranslationEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryTranslationsArgs, 'pagination' | 'sort'>>;
  uploadFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, Partial<QueryUploadFileArgs>>;
  uploadFiles?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryUploadFilesArgs, 'pagination' | 'sort'>>;
  uploadFolder?: Resolver<Maybe<ResolversTypes['UploadFolderEntityResponse']>, ParentType, ContextType, Partial<QueryUploadFolderArgs>>;
  uploadFolders?: Resolver<Maybe<ResolversTypes['UploadFolderEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryUploadFoldersArgs, 'pagination' | 'sort'>>;
  usersPermissionsRole?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntityResponse']>, ParentType, ContextType, Partial<QueryUsersPermissionsRoleArgs>>;
  usersPermissionsRoles?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryUsersPermissionsRolesArgs, 'pagination' | 'sort'>>;
  usersPermissionsUser?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserEntityResponse']>, ParentType, ContextType, Partial<QueryUsersPermissionsUserArgs>>;
  usersPermissionsUsers?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryUsersPermissionsUsersArgs, 'pagination' | 'sort'>>;
}>;

export type ResponseCollectionMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResponseCollectionMeta'] = ResolversParentTypes['ResponseCollectionMeta']> = ResolversObject<{
  pagination?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubchapterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subchapter'] = ResolversParentTypes['Subchapter']> = ResolversObject<{
  FurtherReadings?: Resolver<Maybe<Array<Maybe<ResolversTypes['ComponentContentCallToAction']>>>, ParentType, ContextType, RequireFields<SubchapterFurtherReadingsArgs, 'pagination' | 'sort'>>;
  Literature?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Quiz?: Resolver<Maybe<Array<Maybe<ResolversTypes['ComponentContentQuiz']>>>, ParentType, ContextType, RequireFields<SubchapterQuizArgs, 'pagination' | 'sort'>>;
  Slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  YouTubeURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  chapter?: Resolver<Maybe<ResolversTypes['ChapterEntityResponse']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubchapterEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubchapterEntity'] = ResolversParentTypes['SubchapterEntity']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['Subchapter']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubchapterEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubchapterEntityResponse'] = ResolversParentTypes['SubchapterEntityResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['SubchapterEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubchapterEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubchapterEntityResponseCollection'] = ResolversParentTypes['SubchapterEntityResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['SubchapterEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubchapterRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubchapterRelationResponseCollection'] = ResolversParentTypes['SubchapterRelationResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['SubchapterEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Translation'] = ResolversParentTypes['Translation']> = ResolversObject<{
  Identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Translation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  localizations?: Resolver<Maybe<ResolversTypes['TranslationRelationResponseCollection']>, ParentType, ContextType, RequireFields<TranslationLocalizationsArgs, 'pagination' | 'sort'>>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TranslationEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['TranslationEntity'] = ResolversParentTypes['TranslationEntity']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TranslationEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['TranslationEntityResponse'] = ResolversParentTypes['TranslationEntityResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['TranslationEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TranslationEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TranslationEntityResponseCollection'] = ResolversParentTypes['TranslationEntityResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['TranslationEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TranslationRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TranslationRelationResponseCollection'] = ResolversParentTypes['TranslationRelationResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['TranslationEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UploadFileResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFile'] = ResolversParentTypes['UploadFile']> = ResolversObject<{
  alternativeText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  ext?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formats?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  previewUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  provider_metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  related?: Resolver<Maybe<Array<Maybe<ResolversTypes['GenericMorph']>>>, ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UploadFileEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileEntity'] = ResolversParentTypes['UploadFileEntity']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['UploadFile']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UploadFileEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileEntityResponse'] = ResolversParentTypes['UploadFileEntityResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['UploadFileEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UploadFileEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileEntityResponseCollection'] = ResolversParentTypes['UploadFileEntityResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['UploadFileEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UploadFileRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileRelationResponseCollection'] = ResolversParentTypes['UploadFileRelationResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['UploadFileEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UploadFolderResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFolder'] = ResolversParentTypes['UploadFolder']> = ResolversObject<{
  children?: Resolver<Maybe<ResolversTypes['UploadFolderRelationResponseCollection']>, ParentType, ContextType, RequireFields<UploadFolderChildrenArgs, 'pagination' | 'sort'>>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  files?: Resolver<Maybe<ResolversTypes['UploadFileRelationResponseCollection']>, ParentType, ContextType, RequireFields<UploadFolderFilesArgs, 'pagination' | 'sort'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['UploadFolderEntityResponse']>, ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pathId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UploadFolderEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFolderEntity'] = ResolversParentTypes['UploadFolderEntity']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['UploadFolder']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UploadFolderEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFolderEntityResponse'] = ResolversParentTypes['UploadFolderEntityResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['UploadFolderEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UploadFolderEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFolderEntityResponseCollection'] = ResolversParentTypes['UploadFolderEntityResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['UploadFolderEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UploadFolderRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFolderRelationResponseCollection'] = ResolversParentTypes['UploadFolderRelationResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['UploadFolderEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsCreateRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsCreateRolePayload'] = ResolversParentTypes['UsersPermissionsCreateRolePayload']> = ResolversObject<{
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsDeleteRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsDeleteRolePayload'] = ResolversParentTypes['UsersPermissionsDeleteRolePayload']> = ResolversObject<{
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsLoginPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsLoginPayload'] = ResolversParentTypes['UsersPermissionsLoginPayload']> = ResolversObject<{
  jwt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['UsersPermissionsMe'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsMeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsMe'] = ResolversParentTypes['UsersPermissionsMe']> = ResolversObject<{
  blocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  confirmed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsMeRole']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsMeRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsMeRole'] = ResolversParentTypes['UsersPermissionsMeRole']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsPasswordPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsPasswordPayload'] = ResolversParentTypes['UsersPermissionsPasswordPayload']> = ResolversObject<{
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsPermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsPermission'] = ResolversParentTypes['UsersPermissionsPermission']> = ResolversObject<{
  action?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntityResponse']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsPermissionEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsPermissionEntity'] = ResolversParentTypes['UsersPermissionsPermissionEntity']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['UsersPermissionsPermission']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsPermissionRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsPermissionRelationResponseCollection'] = ResolversParentTypes['UsersPermissionsPermissionRelationResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['UsersPermissionsPermissionEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRole'] = ResolversParentTypes['UsersPermissionsRole']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  permissions?: Resolver<Maybe<ResolversTypes['UsersPermissionsPermissionRelationResponseCollection']>, ParentType, ContextType, RequireFields<UsersPermissionsRolePermissionsArgs, 'pagination' | 'sort'>>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  users?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserRelationResponseCollection']>, ParentType, ContextType, RequireFields<UsersPermissionsRoleUsersArgs, 'pagination' | 'sort'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsRoleEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleEntity'] = ResolversParentTypes['UsersPermissionsRoleEntity']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['UsersPermissionsRole']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsRoleEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleEntityResponse'] = ResolversParentTypes['UsersPermissionsRoleEntityResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsRoleEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleEntityResponseCollection'] = ResolversParentTypes['UsersPermissionsRoleEntityResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['UsersPermissionsRoleEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsUpdateRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUpdateRolePayload'] = ResolversParentTypes['UsersPermissionsUpdateRolePayload']> = ResolversObject<{
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUser'] = ResolversParentTypes['UsersPermissionsUser']> = ResolversObject<{
  blocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  confirmed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntityResponse']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsUserEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserEntity'] = ResolversParentTypes['UsersPermissionsUserEntity']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['UsersPermissionsUser']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsUserEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserEntityResponse'] = ResolversParentTypes['UsersPermissionsUserEntityResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsUserEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserEntityResponseCollection'] = ResolversParentTypes['UsersPermissionsUserEntityResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['UsersPermissionsUserEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsUserRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserRelationResponseCollection'] = ResolversParentTypes['UsersPermissionsUserRelationResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['UsersPermissionsUserEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Chapter?: ChapterResolvers<ContextType>;
  ChapterEntity?: ChapterEntityResolvers<ContextType>;
  ChapterEntityResponse?: ChapterEntityResponseResolvers<ContextType>;
  ChapterEntityResponseCollection?: ChapterEntityResponseCollectionResolvers<ContextType>;
  ChapterRelationResponseCollection?: ChapterRelationResponseCollectionResolvers<ContextType>;
  ComponentContentCallToAction?: ComponentContentCallToActionResolvers<ContextType>;
  ComponentContentContact?: ComponentContentContactResolvers<ContextType>;
  ComponentContentQuiz?: ComponentContentQuizResolvers<ContextType>;
  ComponentContentQuizAnswer?: ComponentContentQuizAnswerResolvers<ContextType>;
  ComponentContentShortLink?: ComponentContentShortLinkResolvers<ContextType>;
  ComponentContentUsp?: ComponentContentUspResolvers<ContextType>;
  ComponentGenericIcon?: ComponentGenericIconResolvers<ContextType>;
  ComponentGenericString?: ComponentGenericStringResolvers<ContextType>;
  Contact?: ContactResolvers<ContextType>;
  ContactEntity?: ContactEntityResolvers<ContextType>;
  ContactEntityResponse?: ContactEntityResponseResolvers<ContextType>;
  ContactEntityResponseCollection?: ContactEntityResponseCollectionResolvers<ContextType>;
  ContactRelationResponseCollection?: ContactRelationResponseCollectionResolvers<ContextType>;
  Course?: CourseResolvers<ContextType>;
  CourseEntity?: CourseEntityResolvers<ContextType>;
  CourseEntityResponse?: CourseEntityResponseResolvers<ContextType>;
  CourseEntityResponseCollection?: CourseEntityResponseCollectionResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  GenericMorph?: GenericMorphResolvers<ContextType>;
  I18NLocale?: I18NLocaleResolvers<ContextType>;
  I18NLocaleCode?: GraphQLScalarType;
  I18NLocaleEntity?: I18NLocaleEntityResolvers<ContextType>;
  I18NLocaleEntityResponse?: I18NLocaleEntityResponseResolvers<ContextType>;
  I18NLocaleEntityResponseCollection?: I18NLocaleEntityResponseCollectionResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Level?: LevelResolvers<ContextType>;
  LevelEntity?: LevelEntityResolvers<ContextType>;
  LevelEntityResponse?: LevelEntityResponseResolvers<ContextType>;
  LevelEntityResponseCollection?: LevelEntityResponseCollectionResolvers<ContextType>;
  LevelRelationResponseCollection?: LevelRelationResponseCollectionResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Pagination?: PaginationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ResponseCollectionMeta?: ResponseCollectionMetaResolvers<ContextType>;
  Subchapter?: SubchapterResolvers<ContextType>;
  SubchapterEntity?: SubchapterEntityResolvers<ContextType>;
  SubchapterEntityResponse?: SubchapterEntityResponseResolvers<ContextType>;
  SubchapterEntityResponseCollection?: SubchapterEntityResponseCollectionResolvers<ContextType>;
  SubchapterRelationResponseCollection?: SubchapterRelationResponseCollectionResolvers<ContextType>;
  Translation?: TranslationResolvers<ContextType>;
  TranslationEntity?: TranslationEntityResolvers<ContextType>;
  TranslationEntityResponse?: TranslationEntityResponseResolvers<ContextType>;
  TranslationEntityResponseCollection?: TranslationEntityResponseCollectionResolvers<ContextType>;
  TranslationRelationResponseCollection?: TranslationRelationResponseCollectionResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  UploadFile?: UploadFileResolvers<ContextType>;
  UploadFileEntity?: UploadFileEntityResolvers<ContextType>;
  UploadFileEntityResponse?: UploadFileEntityResponseResolvers<ContextType>;
  UploadFileEntityResponseCollection?: UploadFileEntityResponseCollectionResolvers<ContextType>;
  UploadFileRelationResponseCollection?: UploadFileRelationResponseCollectionResolvers<ContextType>;
  UploadFolder?: UploadFolderResolvers<ContextType>;
  UploadFolderEntity?: UploadFolderEntityResolvers<ContextType>;
  UploadFolderEntityResponse?: UploadFolderEntityResponseResolvers<ContextType>;
  UploadFolderEntityResponseCollection?: UploadFolderEntityResponseCollectionResolvers<ContextType>;
  UploadFolderRelationResponseCollection?: UploadFolderRelationResponseCollectionResolvers<ContextType>;
  UsersPermissionsCreateRolePayload?: UsersPermissionsCreateRolePayloadResolvers<ContextType>;
  UsersPermissionsDeleteRolePayload?: UsersPermissionsDeleteRolePayloadResolvers<ContextType>;
  UsersPermissionsLoginPayload?: UsersPermissionsLoginPayloadResolvers<ContextType>;
  UsersPermissionsMe?: UsersPermissionsMeResolvers<ContextType>;
  UsersPermissionsMeRole?: UsersPermissionsMeRoleResolvers<ContextType>;
  UsersPermissionsPasswordPayload?: UsersPermissionsPasswordPayloadResolvers<ContextType>;
  UsersPermissionsPermission?: UsersPermissionsPermissionResolvers<ContextType>;
  UsersPermissionsPermissionEntity?: UsersPermissionsPermissionEntityResolvers<ContextType>;
  UsersPermissionsPermissionRelationResponseCollection?: UsersPermissionsPermissionRelationResponseCollectionResolvers<ContextType>;
  UsersPermissionsRole?: UsersPermissionsRoleResolvers<ContextType>;
  UsersPermissionsRoleEntity?: UsersPermissionsRoleEntityResolvers<ContextType>;
  UsersPermissionsRoleEntityResponse?: UsersPermissionsRoleEntityResponseResolvers<ContextType>;
  UsersPermissionsRoleEntityResponseCollection?: UsersPermissionsRoleEntityResponseCollectionResolvers<ContextType>;
  UsersPermissionsUpdateRolePayload?: UsersPermissionsUpdateRolePayloadResolvers<ContextType>;
  UsersPermissionsUser?: UsersPermissionsUserResolvers<ContextType>;
  UsersPermissionsUserEntity?: UsersPermissionsUserEntityResolvers<ContextType>;
  UsersPermissionsUserEntityResponse?: UsersPermissionsUserEntityResponseResolvers<ContextType>;
  UsersPermissionsUserEntityResponseCollection?: UsersPermissionsUserEntityResponseCollectionResolvers<ContextType>;
  UsersPermissionsUserRelationResponseCollection?: UsersPermissionsUserRelationResponseCollectionResolvers<ContextType>;
}>;

