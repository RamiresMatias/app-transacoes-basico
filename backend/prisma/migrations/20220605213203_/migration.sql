-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_releases" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "transaction_id" TEXT NOT NULL,
    "operation_type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_releases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transaction" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "value" DECIMAL(10,2) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "balances" (
    "id" TEXT NOT NULL,
    "value" DECIMAL(10,2) NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "balances_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "balances" ADD CONSTRAINT "balances_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
