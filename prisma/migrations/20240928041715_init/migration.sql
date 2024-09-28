-- CreateTable
CREATE TABLE "suburb" (
    "suburb" TEXT NOT NULL,
    "postcode" INTEGER,
    "lga" TEXT,
    "region" TEXT,
    "area_sqkm" DECIMAL(65,30),
    "population" INTEGER,
    "average_rent" DECIMAL(65,30),
    "ptv_stops_count" INTEGER,
    "openspace_rate" DECIMAL(65,30),
    "crime_rate" DECIMAL(65,30),
    "crash_count" INTEGER,

    CONSTRAINT "suburb_pkey" PRIMARY KEY ("suburb")
);

-- CreateTable
CREATE TABLE "liveability" (
    "liveability_id" TEXT NOT NULL,
    "liveability_suburb" TEXT NOT NULL,
    "liveability_lga" TEXT,
    "ptv_score" DECIMAL(65,30),
    "openspace_score" DECIMAL(65,30),
    "crime_score" DECIMAL(65,30),
    "crash_score" DECIMAL(65,30),
    "liveability_score" DECIMAL(65,30),

    CONSTRAINT "liveability_pkey" PRIMARY KEY ("liveability_id")
);

-- CreateTable
CREATE TABLE "university" (
    "uni_dis_id" TEXT NOT NULL,
    "university" TEXT,
    "uni_to_suburb" TEXT,
    "distance_km" DECIMAL(65,30),
    "distance_score" INTEGER,

    CONSTRAINT "university_pkey" PRIMARY KEY ("uni_dis_id")
);

-- AddForeignKey
ALTER TABLE "liveability" ADD CONSTRAINT "liveability_liveability_suburb_fkey" FOREIGN KEY ("liveability_suburb") REFERENCES "suburb"("suburb") ON DELETE RESTRICT ON UPDATE CASCADE;
