-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "full_name" TEXT,
    "hashed_password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resource" (
    "user_id" INTEGER NOT NULL,
    "resource_id" SERIAL NOT NULL,
    "base_url" TEXT NOT NULL,
    "endpoints" TEXT[],
    "prompt" TEXT NOT NULL,

    CONSTRAINT "Resource_pkey" PRIMARY KEY ("resource_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
